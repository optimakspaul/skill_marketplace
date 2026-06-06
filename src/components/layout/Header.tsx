import Link from 'next/link';
import styles from './Header.module.css';
import { createClient } from '@/utils/supabase/server';
import { signout } from '@/app/login/actions';
import CartIcon from './CartIcon';

export default async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          Optimaks
        </Link>
        <nav className={styles.nav}>
          <Link href="/skill-packs" className={styles.navLink}>技能包</Link>
          <Link href="/bundles" className={styles.navLink}>組合方案</Link>
          <Link href="/tutorial" className={styles.navLink}>使用教學</Link>
          <Link href="/about" className={styles.navLink}>關於我們</Link>
        </nav>
        <div className={styles.actions}>
          <CartIcon />
          {user ? (
            <>
              <Link href="/library" className={styles.loginBtn}>我的圖書館</Link>
              <form action={signout}>
                <button className={styles.loginBtn} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>登出</button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className={styles.loginBtn}>登入</Link>
              <Link href="/skill-packs" className={styles.buyBtn}>立即購買</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
