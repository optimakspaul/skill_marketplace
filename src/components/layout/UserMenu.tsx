'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { signout } from '@/app/login/actions';
import styles from './Header.module.css';

export default function UserMenu({ email }: { email: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get first letter of email for avatar
  const initial = email ? email.charAt(0).toUpperCase() : 'U';

  return (
    <div className={styles.userMenuWrapper} ref={menuRef}>
      <button 
        className={styles.avatarButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User menu"
      >
        {initial}
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownHeader}>
            <span className={styles.userEmail}>{email}</span>
          </div>
          <div className={styles.dropdownDivider}></div>
          <Link href="/library" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
            📚 我的圖書館
          </Link>
          <Link href="/profile" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
            👤 帳號與購買紀錄
          </Link>
          <div className={styles.dropdownDivider}></div>
          <form action={signout}>
            <button className={styles.dropdownItem} style={{ width: '100%', textAlign: 'left', color: '#ef4444' }}>
              登出
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
