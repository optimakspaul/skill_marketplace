'use client';

import { useCart } from '@/context/CartContext';
import { skillPacks } from '@/lib/seed';
import Link from 'next/link';

interface Props {
  packIds: string[];
  className?: string;
  style?: React.CSSProperties;
}

export default function AddPairToCartButton({ packIds, className, style }: Props) {
  const { cart, addToCart, removeFromCart, purchasedPackIds } = useCart();
  
  // Check if all items in the pair are already purchased
  const allPurchased = packIds.every(id => purchasedPackIds?.includes(id));
  
  // Check if all items in the pair are in the cart (or already purchased)
  // We only care about adding things they don't own yet
  const missingItems = packIds.filter(id => !purchasedPackIds?.includes(id));
  const allInCart = missingItems.length === 0 || missingItems.every(id => cart.some(item => item.id === id));

  if (allPurchased) {
    return (
      <Link 
        href="/library"
        className={className} 
        style={{ ...style, background: '#4b5563', borderColor: '#4b5563', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
      >
        📚 已全部擁有
      </Link>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (allInCart) {
      // Remove the items we just added (only the ones not owned)
      missingItems.forEach(id => removeFromCart(id));
    } else {
      // Add missing ones
      missingItems.forEach(id => {
        if (!cart.some(item => item.id === id)) {
          const pack = skillPacks.find(p => p.id === id);
          if (pack) {
            addToCart(pack);
          }
        }
      });
    }
  };

  if (allInCart) {
    return (
      <button 
        onClick={handleClick}
        className={className} 
        style={{ ...style, background: '#10b981', borderColor: '#10b981', cursor: 'pointer', color: 'white' }}
      >
        ✓ 已加入組合 (點擊取消)
      </button>
    );
  }

  return (
    <button 
      onClick={handleClick}
      className={className}
      style={style}
    >
      加入購物車
    </button>
  );
}
