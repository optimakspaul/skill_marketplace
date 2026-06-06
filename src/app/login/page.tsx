import { login, signup } from './actions'
import styles from './page.module.css'
import Link from 'next/link'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const resolvedSearchParams = await searchParams;
  
  return (
    <div className={styles.page}>
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          <h1 className={styles.title}>登入 / 註冊</h1>
          <p className={styles.subtitle}>登入以查看您的個人商品庫 (My Library) 或進行結帳。</p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">電子郵件</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password">密碼</label>
            <input id="password" name="password" type="password" required placeholder="••••••••" />
          </div>

          {resolvedSearchParams.error && (
            <div className={styles.errorMessage}>{resolvedSearchParams.error}</div>
          )}

          <div className={styles.buttonGroup}>
            <button formAction={login} className={styles.btnPrimary}>登入</button>
            <button formAction={signup} className={styles.btnOutline}>註冊新帳號</button>
          </div>
          
          <div className={styles.divider}>
            <span>或</span>
          </div>

          <button type="button" className={styles.btnGoogle}>
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            使用 Google 一鍵登入
          </button>
        </form>

        <div className={styles.footer}>
          <Link href="/">← 返回首頁</Link>
        </div>
      </div>
    </div>
  )
}
