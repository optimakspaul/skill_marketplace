'use client';

import { useCart } from '@/context/CartContext';

interface Props {
  pack: any;
  className?: string;
  style?: React.CSSProperties;
}

export default function AddToCartButton({ pack, className, style }: Props) {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some(item => item.id === pack.id);

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
