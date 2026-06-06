import { createClient } from '@/utils/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import styles from './page.module.css'
import { skillPacks } from '@/lib/seed'

export default async function LibraryViewerPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const packId = resolvedParams.id;

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Check if user has purchased this pack
  const { data: purchase, error } = await supabase
    .from('purchases')
    .select('id')
    .eq('user_id', user.id)
    .eq('product_id', packId)
    .single()

  // For testing purposes, if you want to bypass this check during dev, you can comment this out:
  if (error || !purchase) {
    redirect('/library?error=unauthorized')
  }

  const pack = skillPacks.find(p => p.id === packId)

  if (!pack) {
    notFound()
  }

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/library" className={styles.backLink}>← 回到我的圖書館</Link>
          <div className={styles.packInfo}>
            <div className={styles.packIcon}>{pack.icon}</div>
            <h2 className={styles.packTitle}>{pack.title}</h2>
          </div>
        </div>
        <nav className={styles.sidebarNav}>
          <div className={`${styles.navItem} ${styles.active}`}>📋 Master Prompt</div>
          <div className={styles.navItem}>👤 角色設定模板</div>
          <div className={styles.navItem}>📝 輸入表單範例</div>
          <div className={styles.navItem}>📄 輸出結構模板</div>
          <div className={styles.navItem}>💡 實戰案例解析</div>
          <div className={styles.navItem}>📖 使用教學與技巧</div>
        </nav>
      </div>

      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h1 className={styles.contentTitle}>Master Prompt</h1>
          <button className={styles.btnCopy}>複製全部內容</button>
        </div>
        {pack.downloadUrl && (
          <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#0f172a' }}>🎁 專屬附件與模板</h3>
            <p style={{ color: '#475569', marginBottom: '1rem' }}>此技能包包含額外的實體檔案或 Notion 模板，請點擊下方按鈕取得：</p>
            <a 
              href={pack.downloadUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#2563eb', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}
            >
              📥 下載附件 / 取得模板
            </a>
          </div>
        )}

        {pack.promptContent ? (
          <div className={styles.viewerContainer}>
            <div className={styles.instructionBox}>
              <strong>💡 使用說明：</strong>
              <p>請將下方的 Prompt 完整複製，貼到 ChatGPT、Claude 或 Gemini 進行新的對話。</p>
            </div>

            <pre className={styles.promptCode}>
              <code>{pack.promptContent}</code>
            </pre>
          </div>
        ) : (
          <div className={styles.viewerContainer}>
            <div className={styles.instructionBox}>
              <p>此技能包目前沒有純文字的 Prompt 內容。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
