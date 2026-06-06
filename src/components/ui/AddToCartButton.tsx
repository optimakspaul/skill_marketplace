'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

interface Props {
  pack: any;
  className?: string;
  style?: React.CSSProperties;
}

export default function AddToCartButton({ pack, className, style }: Props) {
  const { cart, addToCart, removeFromCart, purchasedPackIds } = useCart();
  
  const isPurchased = purchasedPackIds?.includes(pack.id);
  const isInCart = cart.some(item => item.id === pack.id);

  if (isPurchased) {
    return (
      <Link 
        href={`/library`}
        className={className} 
        style={{ ...style, background: '#4b5563', borderColor: '#4b5563', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
      >
        📚 已擁有
      </Link>
    );
  }

  if (isInCart) {
    return (
      <button 
        onClick={(e) => {
          e.preventDefault();
          removeFromCart(pack.id);
        }}
        className={className} 
        style={{ ...style, background: '#10b981', borderColor: '#10b981', cursor: 'pointer', color: 'white' }}
      >
        ✓ 已加入 (點擊取消)
      </button>
    );
  }

  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        addToCart(pack);
      }} 
      className={className}
      style={style}
    >
      加入購物車
    </button>
  );
}
