import AddPairToCartButton from './AddPairToCartButton';
import styles from './FormulaBundleCard.module.css';

interface FormulaBundleProps {
  badgeText: string;
  badgeColor?: string;
  item1Icon: string;
  item1Title: string;
  item2Icon: string;
  item2Title: string;
  item3Icon?: string;
  item3Title?: string;
  resultTitle: string;
  resultDesc: string;
  price: number;
  originalPrice: number;
  packIds: string[];
}

export default function FormulaBundleCard({
  badgeText,
  badgeColor = '#10b981',
  item1Icon,
  item1Title,
  item2Icon,
  item2Title,
  item3Icon,
  item3Title,
  resultTitle,
  resultDesc,
  price,
  originalPrice,
  packIds
}: FormulaBundleProps) {
  return (
    <div className={styles.bundleCardSmall}>
      <div className={styles.bundleBadge} style={{ backgroundColor: badgeColor }}>{badgeText}</div>
      <div className={styles.bundleEquation}>
        <span>{item1Icon} {item1Title}</span> + <span>{item2Icon} {item2Title}</span>
        {item3Icon && item3Title && (
          <> + <span>{item3Icon} {item3Title}</span></>
        )}
      </div>
      <div className={styles.bundleArrow}>↓</div>
      <div className={styles.bundleResult}>{resultTitle}</div>
      <div className={styles.bundleDesc}>{resultDesc}</div>
      <div className={styles.bundleFooter}>
        <span className={styles.bundlePrice}>${price} <span className={styles.strike}>${originalPrice}</span></span>
        <AddPairToCartButton packIds={packIds} className={styles.btnSecondary} />
      </div>
    </div>
  );
}
