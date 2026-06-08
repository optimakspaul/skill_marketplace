import Link from 'next/link';
import styles from './Header.module.css';
import { createClient } from '@/utils/supabase/server';
import { signout } from '@/app/login/actions';
import CartIcon from './CartIcon';
import UserMenu from './UserMenu';

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
            <UserMenu email={user.email || ''} />
          ) : (
            <>
              <Link href="/login" className={styles.loginBtn}>登入</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
