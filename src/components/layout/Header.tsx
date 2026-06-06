import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          Optimaks
        </Link>
        <nav className={styles.nav}>
          <Link href="/skill-packs" className={styles.navLink}>技能包</Link>
          <Link href="/bundles" className={styles.navLink}>組合方案</Link>
          <Link href="/services" className={styles.navLink}>專家服務</Link>
          <Link href="/tutorial" className={styles.navLink}>使用教學</Link>
          <Link href="/about" className={styles.navLink}>關於我們</Link>
        </nav>
        <div className={styles.actions}>
          <Link href="/login" className={styles.loginBtn}>登入</Link>
          <Link href="/skill-packs" className={styles.buyBtn}>立即購買</Link>
        </div>
      </div>
    </header>
  );
}
