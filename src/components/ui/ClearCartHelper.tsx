'use client';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function ClearCartHelper() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { clearCart } = useCart();

  useEffect(() => {
    if (searchParams?.get('clearCart') === 'true') {
      clearCart();
      
      // Remove clearCart from URL to prevent infinite loops or clearing on refresh
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete('clearCart');
      
      const newUrl = newParams.toString() ? `${pathname}?${newParams.toString()}` : pathname;
      router.replace(newUrl, { scroll: false });
    }
  }, [searchParams, clearCart, router, pathname]);

  return null;
}
