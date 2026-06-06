import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { skillPacks, bundles } from '@/lib/seed';
import styles from './page.module.css';

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch purchase history
  const { data: purchases, error } = await supabase
    .from('purchases')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  // Map to product details
  const enrichedPurchases = (purchases || []).map(p => {
    // Check if it's a bundle or a skill pack
    // Our webhook unrolls bundles into skill packs, so we'll only see skill packs here.
    // But just in case, we check both.
    const product = skillPacks.find(sp => sp.id === p.product_id) || bundles.find(b => b.id === p.product_id);
    return {
      ...p,
      product,
      date: new Date(p.created_at).toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
  }).filter(p => p.product); // filter out unknown products

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>使用者中心 (Profile)</h1>
          <p className={styles.subtitle}>管理您的帳戶資訊與檢視購買紀錄</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>👤 帳號資訊</h2>
            <div className={styles.infoGroup}>
              <span className={styles.infoLabel}>登入信箱 (Email)</span>
              <div className={styles.infoValue}>{user.email}</div>
            </div>
            {/* In a real app, you might have a Stripe customer portal link here */}
            {/* <Link href="/api/stripe/portal" className={styles.btnPrimary}>管理付費設定</Link> */}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🧾 購買紀錄 (Purchase History)</h2>
            {enrichedPurchases.length > 0 ? (
              <div className={styles.purchaseList}>
                {enrichedPurchases.map((purchase) => (
                  <div key={purchase.id} className={styles.purchaseItem}>
                    <div className={styles.purchaseInfo}>
                      <div className={styles.purchaseIcon}>
                        {purchase.product && 'icon' in purchase.product ? purchase.product.icon : '📦'}
                      </div>
                      <div className={styles.purchaseDetails}>
                        <div className={styles.purchaseTitle}>{purchase.product?.title}</div>
                        <div className={styles.purchaseDate}>購買時間：{purchase.date}</div>
                      </div>
                    </div>
                    {purchase.product && 'icon' in purchase.product && (
                      <Link href={`/library/${purchase.product_id}`} className={styles.btnPrimary}>
                        查看內容
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <p>您目前還沒有任何購買紀錄。</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
