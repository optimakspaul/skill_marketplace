'use client';

import { useCart } from '@/context/CartContext';
import { skillPacks } from '@/lib/seed';

interface Props {
  packIds: string[];
  className?: string;
  style?: React.CSSProperties;
}

export default function AddPairToCartButton({ packIds, className, style }: Props) {
  const { cart, addToCart, removeFromCart } = useCart();
  
  // Check if all items in the pair are in the cart
  const allInCart = packIds.every(id => cart.some(item => item.id === id));

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (allInCart) {
      // Remove all
      packIds.forEach(id => removeFromCart(id));
    } else {
      // Add missing ones
      packIds.forEach(id => {
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
