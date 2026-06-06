'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function CartIcon() {
  const { cart } = useCart();
  const itemCount = cart.length;

  return (
    <Link href="/cart" className={styles.cartIconWrapper}>
      <span className={styles.cartIcon}>🛒</span>
      {itemCount > 0 && (
        <span className={styles.cartBadge}>{itemCount}</span>
      )}
    </Link>
  );
}
