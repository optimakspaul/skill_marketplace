'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface CartContextType {
  cart: any[];
  addToCart: (pack: any) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalPrice: number;
  rawTotalPrice: number;
  discount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('optimaks_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);

  // Listen for cart changes to save to localStorage
  useEffect(() => {
    if (isMounted) {
      // Auto-cleanup: If Expert Bundle (b-002) is in cart, nothing else should be there
      if (cart.some(item => item.id === 'b-002') && cart.length > 1) {
        setCart(cart.filter(item => item.id === 'b-002'));
      } else {
        localStorage.setItem('optimaks_cart', JSON.stringify(cart));
      }
    }
  }, [cart, isMounted]);

  // Clear cart on successful purchase
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('clearCart') === 'true') {
        setCart([]);
        localStorage.removeItem('optimaks_cart');
      }
    }
  }, []);

  const addToCart = useCallback((pack: any) => {
    setCart((prevCart) => {
      // Prevent duplicates
      if (prevCart.some((item) => item.id === pack.id)) {
        return prevCart;
      }

      // Mutual exclusivity for bundles
      // If adding Expert Bundle (b-002), it includes everything, so clear the cart and add it.
      if (pack.id === 'b-002') {
        return [pack];
      }

      // If Expert Bundle is already in cart, don't add anything else
      // (since they already own everything)
      if (prevCart.some(item => item.id === 'b-002')) {
        alert('您已加入 Expert Bundle 全包方案，不需重複購買其他技能包！');
        return prevCart;
      }
      
      return [...prevCart, pack];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('optimaks_cart');
    }
  }, []);

  const rawTotalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  
  // Auto-apply bundle discounts
  // Every 2 items (pair) gets a $1.0 discount ($19.8 -> $18.8)
  const regularItemsCount = cart.filter(item => !item.packIds).length; 
  const twos = Math.floor(regularItemsCount / 2);
  
  const discount = twos * 1.0;

  const totalPrice = rawTotalPrice - discount;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice, discount, rawTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
