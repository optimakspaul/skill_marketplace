'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';
import { createCartCheckoutSession, masterBypassCheckout } from '../checkout/actions';
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, totalPrice, rawTotalPrice, discount } = useCart();
  const [isMaster, setIsMaster] = useState(false);

  useEffect(() => {
    const checkMaster = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user && user.email === 'kokotsai@gmail.com') {
        setIsMaster(true);
      }
    };
    checkMaster();
  }, []);

  if (cart.length === 0) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2>您的購物車是空的</h2>
            <p>目前購物車內沒有任何商品，趕快去探索適合您的技能包吧！</p>
            <Link href="/skill-packs" className={styles.btnPrimary}>
              前往市集探索
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Comma separated list of product IDs for checkout
  const productIds = cart.map(item => item.id).join(',');

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.pageTitle}>購物車</h1>
        
        <div className={styles.cartLayout}>
          <div className={styles.cartItems}>
            <div className={styles.cartHeader}>
              <span>商品項目</span>
              <span>價格</span>
            </div>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.description.substring(0, 50)}...</p>
                  </div>
                </div>
                <div className={styles.itemPriceAction}>
                  <div className={styles.itemPrice}>${item.price}</div>
                  <button onClick={() => removeFromCart(item.id)} className={styles.btnRemove}>
                    移除
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h3 className={styles.summaryTitle}>訂單摘要</h3>
            <div className={styles.summaryRow}>
              <span>商品數量</span>
              <span>{cart.length} 件</span>
            </div>
            <div className={styles.summaryRow}>
              <span>小計</span>
              <span>${rawTotalPrice.toFixed(1)}</span>
            </div>
            {discount > 0 && (
              <div className={styles.summaryRow}>
                <span>組合包自動折扣</span>
                <span className={styles.textGreen}>-${discount.toFixed(1)}</span>
              </div>
            )}
            <div className={styles.summaryTotalRow}>
              <span>總計</span>
              <span className={styles.totalPrice}>${totalPrice.toFixed(1)} <span className={styles.usdText}>USD</span></span>
            </div>

            <form action={createCartCheckoutSession} style={{ width: '100%' }}>
              <input type="hidden" name="productIds" value={productIds} />
              <button type="submit" className={styles.btnCheckout}>前往結帳</button>
            </form>

            {isMaster && (
              <form action={masterBypassCheckout} style={{ width: '100%', marginTop: '0.75rem' }}>
                <input type="hidden" name="productIds" value={productIds} />
                <button type="submit" className={styles.btnCheckout} style={{ background: '#f59e0b', borderColor: '#f59e0b', color: 'white' }}>
                  👑 Master 直接開通 (免付費)
                </button>
              </form>
            )}

            <div className={styles.secureNote}>🔒 安全付款 / 數位商品即時交付</div>
          </div>
        </div>
      </div>
    </div>
  );
}
