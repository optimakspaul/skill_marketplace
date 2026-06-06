import Image from 'next/image';
import Link from 'next/link';
import { skillPacks, bundles } from '@/lib/seed';
import SkillPackCard from '@/components/ui/SkillPackCard';
import BundleCard from '@/components/ui/BundleCard';
import styles from './page.module.css';

export default function Home() {
  const hotPacks = skillPacks.filter(pack => pack.isHot);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              把好書與思考模型，<br />
              <span className={styles.heroTitleHighlight}>變成可立即使用的 AI 技能包</span>
            </h1>
            <p className={styles.heroSubtitle}>
              不是雞湯，而是把知識活學活用。適用 ChatGPT、Claude、Gemini，跨語言使用。<br />
              給上班族、自由工作者、小老闆與想翻身的人，一套低門檻的 AI 顧問型技能工具。
            </p>
            <div className={styles.heroActions}>
              <Link href="/skill-packs" className={styles.btnPrimary}>
                立即探索技能包 →
              </Link>
              <Link href="/bundles" className={styles.btnOutline}>
                查看組合方案
              </Link>
            </div>
            <div className={styles.heroTags}>
              <span>🌐 跨語言</span>
              <span>🧠 顧問型技能包</span>
              <span>🔀 可交叉組合</span>
              <span>🤖 適用三大 AI 平台</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.mockupContainer}>
              <div className={styles.mockupCard}>
                <div className={styles.mockupIcon}>❓</div>
                <div>問題釐清<br/>Skill Pack</div>
              </div>
              <span className={styles.mathSign}>+</span>
              <div className={styles.mockupCard}>
                <div className={styles.mockupIcon}>📈</div>
                <div>營收增長<br/>Skill Pack</div>
              </div>
            </div>
            <div className={styles.mockupResult}>
              <div className={styles.mockupCardLarge}>
                <div className={styles.mockupIcon}>⭐️</div>
                <div>新技能</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skill Packs */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>精選熱門技能包</h2>
            <Link href="/skill-packs" className={styles.viewAll}>
              查看所有技能包 &gt;
            </Link>
          </div>
          <div className={styles.grid4}>
            {hotPacks.map(pack => (
              <SkillPackCard key={pack.id} pack={pack} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={`${styles.section} ${styles.bgSubtle}`}>
        <div className="container">
          <div className={styles.howItWorksLayout}>
            <div className={styles.howItWorksText}>
              <h2 className={styles.sectionTitle}>像積木一樣堆疊，<br/>變成你的 AI 顧問系統</h2>
              <p className={styles.sectionSubtitle}>
                自由組合技能包，創造更強大的複合能力。
              </p>
            </div>
            <div className={styles.howItWorksVisual}>
               <div className={styles.combinerRow}>
                 <span className={styles.cItem}>問題釐清</span>
                 <span className={styles.cMath}>×</span>
                 <span className={styles.cItem}>根因分析</span>
                 <span className={styles.cArrow}>→</span>
                 <span className={styles.cResult}>深度問題診斷</span>
               </div>
               <div className={styles.combinerRow}>
                 <span className={styles.cItem}>營收增長</span>
                 <span className={styles.cMath}>×</span>
                 <span className={styles.cItem}>客戶旅程</span>
                 <span className={styles.cArrow}>→</span>
                 <span className={styles.cResult}>成交漏斗優化</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={styles.section}>
        <div className="container">
           <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>四步驟，立即開始使用</h2>
           <div className={styles.stepsGrid}>
              <div className={styles.step}>
                 <div className={styles.stepNum}>1</div>
                 <div className={styles.stepIcon}>📦</div>
                 <h3 className={styles.stepTitle}>選擇技能包</h3>
                 <p className={styles.stepDesc}>從 60+ 技能包中，挑選最適合你的主題。</p>
              </div>
              <div className={styles.step}>
                 <div className={styles.stepNum}>2</div>
                 <div className={styles.stepIcon}>💻</div>
                 <h3 className={styles.stepTitle}>貼給 AI 平台</h3>
                 <p className={styles.stepDesc}>一鍵複製 Master Prompt，貼到 ChatGPT/Claude 等。</p>
              </div>
              <div className={styles.step}>
                 <div className={styles.stepNum}>3</div>
                 <div className={styles.stepIcon}>💬</div>
                 <h3 className={styles.stepTitle}>輸入你的問題</h3>
                 <p className={styles.stepDesc}>依據引導提供資訊，AI 會依循設定思考。</p>
              </div>
              <div className={styles.step}>
                 <div className={styles.stepNum}>4</div>
                 <div className={styles.stepIcon}>🚀</div>
                 <h3 className={styles.stepTitle}>取得分析與行動計畫</h3>
                 <p className={styles.stepDesc}>獲得精準的分析結果與下一步建議，立即執行。</p>
              </div>
           </div>
        </div>
      </section>

      {/* Bundles */}
      <section className={`${styles.section} ${styles.bgSubtle}`}>
        <div className="container">
           <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>選擇最適合你的組合方案</h2>
           <p className={`${styles.sectionSubtitle} ${styles.textCenter} ${styles.mbExtra}`}>
             Founding pricing for early adopters
           </p>
           <div className={styles.bundlesGrid}>
             <div className={styles.singlePackPromo}>
               <h3 className={styles.singleTitle}>Single Pack<br/><span className={styles.singleSub}>單一技能包</span></h3>
               <div className={styles.singlePrice}>$9.9</div>
               <ul className={styles.singleFeatures}>
                 <li>✓ 任選 1 個技能包</li>
                 <li>✓ 終身更新</li>
                 <li>✓ 適用三大 AI 平台</li>
               </ul>
               <Link href="/skill-packs" className={styles.btnOutlineBlock}>立即購買</Link>
             </div>
             {bundles.map(bundle => (
               <BundleCard key={bundle.id} bundle={bundle} />
             ))}
           </div>
        </div>
      </section>
      
      {/* Testimonials (Placeholder CTA) */}
      <section className={styles.sectionCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>先從一個技能包開始，<br/>讓 AI 幫你把知識變成行動</h2>
            <Link href="/skill-packs" className={styles.btnPrimaryLarge}>
              立即探索技能包
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
