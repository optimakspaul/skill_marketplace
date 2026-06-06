'use client';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useSearchParams } from 'next/navigation';

export default function ClearCartHelper() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();

  useEffect(() => {
    if (searchParams?.get('clearCart') === 'true') {
      clearCart();
    }
  }, [searchParams, clearCart]);

  return null;
}
