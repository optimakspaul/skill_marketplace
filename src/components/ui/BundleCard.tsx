import Link from 'next/link';
import { Bundle } from '@/lib/seed';
import styles from './BundleCard.module.css';

interface Props {
  bundle: Bundle;
}

export default function BundleCard({ bundle }: Props) {
  return (
    <div className={`${styles.card} ${bundle.isPopular ? styles.popular : ''}`}>
      {bundle.isPopular && <div className={styles.badgePopular}>最受歡迎</div>}
      
      <div className={styles.header}>
        <h3 className={styles.title}>{bundle.title}</h3>
        <p className={styles.description}>{bundle.description}</p>
      </div>
      
      <div className={styles.pricing}>
        <span className={styles.price}>${bundle.price}</span>
        {bundle.originalPrice && (
          <span className={styles.originalPrice}>${bundle.originalPrice}</span>
        )}
      </div>
      
      <ul className={styles.features}>
        {bundle.features.map((feature, i) => (
          <li key={i} className={styles.featureItem}>
            <span className={styles.checkIcon}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link href={`/checkout/${bundle.id}`} className={styles.buyBtn}>
        立即購買
      </Link>
    </div>
  );
}
