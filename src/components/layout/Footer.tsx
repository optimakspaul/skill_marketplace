import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Optimaks</h2>
          <p className={styles.slogan}>把好書與思考模型，變成可立即使用的 AI 技能包。</p>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>產品</h3>
            <Link href="/skill-packs">技能包</Link>
            <Link href="/bundles">組合方案</Link>
            <Link href="/services">專家服務</Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>資源</h3>
            <Link href="/tutorial">使用教學</Link>
            <Link href="/blog">部落格</Link>
            <Link href="/cases">案例分享</Link>
            <Link href="/faq">常見問題</Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>公司</h3>
            <Link href="/about">關於我們</Link>
            <Link href="/contact">聯絡我們</Link>
            <Link href="/partners">合作夥伴</Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>法律</h3>
            <Link href="/terms">服務條款</Link>
            <Link href="/privacy">隱私權政策</Link>
            <Link href="/refund">退款政策</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2025 Optimaks. All rights reserved.
      </div>
    </footer>
  );
}
