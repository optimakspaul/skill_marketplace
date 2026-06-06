import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import styles from './page.module.css'
import { skillPacks } from '@/lib/seed'
import ClearCartHelper from '@/components/ui/ClearCartHelper'

export default async function LibraryPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch purchases from Supabase
  const { data: purchases, error } = await supabase
    .from('purchases')
    .select('product_id, created_at')
    .eq('user_id', user.id)

  const rawPurchasedPacks = purchases 
    ? purchases.map(p => skillPacks.find(sp => sp.id === p.product_id)).filter(Boolean) 
    : []

  // Deduplicate packs in case there are multiple purchase records for the same product
  const purchasedPacks = Array.from(new Map(rawPurchasedPacks.map((pack: any) => [pack.id, pack])).values())

  return (
    <div className={styles.page}>
      <Suspense fallback={null}>
        <ClearCartHelper />
      </Suspense>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>我的圖書館 (My Library)</h1>
          <p className={styles.subtitle}>歡迎回來，{user.email}！這裡包含了您所有購買過的技能包與資源。</p>
        </div>

        {purchasedPacks.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📚</div>
            <h3>您的圖書館目前空空如也</h3>
            <p>還沒有購買任何技能包？去市集看看有沒有能幫上忙的工具吧！</p>
            <Link href="/skill-packs" className={styles.btnPrimary}>探索技能包</Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {purchasedPacks.map((pack: any) => (
              <div key={pack.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>{pack.icon}</div>
                  <h3 className={styles.cardTitle}>{pack.title}</h3>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardDesc}>把模糊問題變清楚，讓 AI 幫你問對問題、聚焦關鍵、找到下一步。</p>
                </div>
                <div className={styles.cardFooter}>
                  <Link href={`/library/${pack.id}`} className={styles.btnOutline}>
                    查看內容 / 取得 Prompt
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
