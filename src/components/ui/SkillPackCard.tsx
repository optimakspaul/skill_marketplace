import Link from 'next/link';
import { SkillPack } from '@/lib/seed';
import styles from './SkillPackCard.module.css';
import AddToCartButton from './AddToCartButton';

interface Props {
  pack: SkillPack;
}

export default function SkillPackCard({ pack }: Props) {
  return (
    <div className={styles.card}>
      {pack.isHot && <div className={styles.badgeHot}>熱門</div>}
      {pack.isNew && <div className={styles.badgeNew}>新上架</div>}
      
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{pack.icon}</span>
      </div>
      
      <h3 className={styles.title}>{pack.title}</h3>
      <p className={styles.description}>{pack.description}</p>
      
      <div className={styles.tags}>
        {pack.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <span className={styles.price}>${pack.price}</span>
          <Link href={`/skill-packs/${pack.id}`} className={styles.link}>
            查看詳情
          </Link>
        </div>
        <AddToCartButton pack={pack} className={styles.btnBuy} />
      </div>
    </div>
  );
}
