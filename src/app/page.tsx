import Image from 'next/image';
import Link from 'next/link';
import { skillPacks, bundles } from '@/lib/seed';
import SkillPackCard from '@/components/ui/SkillPackCard';
import BundleCard from '@/components/ui/BundleCard';
import FormulaBundleCard from '@/components/ui/FormulaBundleCard';
import AddToCartButton from '@/components/ui/AddToCartButton';
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

      {/* Four Branches Section */}
      <section className={styles.section}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.sectionTitle}>四大專業支線，解決各種商業難題</h2>
            <p className={styles.sectionSubtitle}>從問題解決到財經研究，我們為不同的使用情境打造了專屬的解決方案</p>
          </div>

          {['問題解決', '電商專用', '小老闆專用', '財經專用'].map((category, index) => {
            const packsInCategory = skillPacks.filter(p => p.category === category);
            return (
              <div key={category} style={{ marginBottom: index === 3 ? 0 : '4rem' }}>
                <div className={styles.sectionHeader}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-color)' }}>{index + 1}.</span> {category}支線
                  </h3>
                  <Link href={`/skill-packs`} className={styles.viewAll}>
                    查看全部 &gt;
                  </Link>
                </div>
                <div className={styles.grid4}>
                  {packsInCategory.map(pack => (
                    <div key={pack.id}>
                      <SkillPackCard pack={pack} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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

      {/* 4. 四步驟 */}
      <section className={styles.steps}>
        <div className="container">
           <h2 className={`${styles.sectionTitle} text-center`} style={{textAlign: 'center', marginBottom: '3rem'}}>四步驟，立即開始使用</h2>
           <div className={styles.stepsFlow}>
              <div className={styles.stepItem}>
                 <div className={styles.stepNum}>1</div>
                 <div className={styles.stepIconBox}>📦</div>
                 <h3 className={styles.stepTitle}>選擇技能包</h3>
                 <p className={styles.stepDesc}>從 60+ 技能包中，挑選最適合你的主題。</p>
              </div>
              <div className={styles.stepDivider}></div>
              <div className={styles.stepItem}>
                 <div className={styles.stepNum}>2</div>
                 <div className={styles.stepIconBox}>💻</div>
                 <h3 className={styles.stepTitle}>貼給 ChatGPT / Claude</h3>
                 <p className={styles.stepDesc}>一鍵複製與貼上，指派你背後的 AI 平台。</p>
              </div>
              <div className={styles.stepDivider}></div>
              <div className={styles.stepItem}>
                 <div className={styles.stepNum}>3</div>
                 <div className={styles.stepIconBox}>💬</div>
                 <h3 className={styles.stepTitle}>輸入你的問題</h3>
                 <p className={styles.stepDesc}>提供情境與目標，AI 會依循設定引導思考。</p>
              </div>
              <div className={styles.stepDivider}></div>
              <div className={styles.stepItem}>
                 <div className={styles.stepNum}>4</div>
                 <div className={styles.stepIconBox}>🚀</div>
                 <h3 className={styles.stepTitle}>取得分析與行動計畫</h3>
                 <p className={styles.stepDesc}>獲得精準、可落地的建議與模板，立即執行。</p>
              </div>
           </div>
        </div>
      </section>

      {/* Popular Bundles Section */}
      <section className={`${styles.section} ${styles.bgSubtle}`}>
        <div className="container">
           <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>從專家配對的熱門組合開始</h2>
           <p className={`${styles.sectionSubtitle} ${styles.textCenter} ${styles.mbExtra}`}>
             任選 2 件系統將自動為您折抵 $1 USD，創造更強大的複合能力
           </p>
           
           <div className={styles.bundlesGrid}>
              <FormulaBundleCard
                badgeText="熱門組合"
                badgeColor="#2563eb"
                item1Icon="❓"
                item1Title="問題釐清"
                item2Icon="🔄"
                item2Title="問題為什麼一直發生"
                resultTitle="深度問題診斷"
                resultDesc="不只把模糊問題問清楚，更挖出不斷重複發生的底層根因。"
                price={18.8}
                originalPrice={19.8}
                packIds={['sp-01', 'sp-02']}
              />
              
              <FormulaBundleCard
                badgeText="電商必備"
                badgeColor="#ec4899"
                item1Icon="🛍️"
                item1Title="商品賣點提煉"
                item2Icon="📝"
                item2Title="廣告文案生成"
                resultTitle="爆品行銷煉金術"
                resultDesc="從精煉商品獨特賣點到產出吸睛社群文案，一氣呵成。"
                price={18.8}
                originalPrice={19.8}
                packIds={['sp-05', 'sp-06']}
              />
              
              <FormulaBundleCard
                badgeText="老闆最愛"
                badgeColor="#10b981"
                item1Icon="📄"
                item1Title="流程標準化"
                item2Icon="⏳"
                item2Title="老闆省時間"
                resultTitle="企業自動化引擎"
                resultDesc="把日常工作變 SOP，並找出可外包或 AI 化的工作，徹底解放時間。"
                price={18.8}
                originalPrice={19.8}
                packIds={['sp-11', 'sp-12']}
              />
           </div>

           <div style={{ textAlign: 'center', marginTop: '3rem' }}>
             <Link href="/bundles" className={styles.btnOutline} style={{ padding: '0.85rem 2rem', fontSize: '1.1rem' }}>
               查看所有推薦組合方案 →
             </Link>
           </div>
        </div>
      </section>
      
      {/* 5. 為什麼現在切入 */}
      <section className={styles.sea}>
        <div className="container">
           <h2 className={styles.sectionTitle} style={{marginBottom: '3rem'}}>為什麼現在切入印尼與東南亞？</h2>
           <div className={styles.seaGrid}>
              <div className={styles.seaCard}>
                 <div className={styles.seaIcon}>🌐</div>
                 <h3 className={styles.seaTitle}>AI 普及底氣高</h3>
                 <p className={styles.seaDesc}>印尼在嘴砲與個人日常中 AI 使用率領先全球，多數用戶已把它視為工作標配。</p>
              </div>
              <div className={styles.seaCard}>
                 <div className={styles.seaIcon}>👥</div>
                 <h3 className={styles.seaTitle}>知識落差大</h3>
                 <p className={styles.seaDesc}>專業知識與實務方法論落差，優質技能包能快速創造價值與競爭優勢。</p>
              </div>
              <div className={styles.seaCard}>
                 <div className={styles.seaIcon}>📈</div>
                 <h3 className={styles.seaTitle}>想提升收入與工作效率的人多</h3>
                 <p className={styles.seaDesc}>年輕人口紅利與數位化加速，對於提升收入與效率的需求強烈且持續成長。</p>
              </div>
              <div className={styles.seaCard}>
                 <div className={styles.seaIcon}>💬</div>
                 <h3 className={styles.seaTitle}>跨語言技能包更有優勢</h3>
                 <p className={styles.seaDesc}>支援 Bahasa Indonesia / English / 中文，幫助你跨語言思考、輸出與影響更多人。</p>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section className={styles.pricing}>
         <div className="container">
            <h2 className={styles.pricingHead}>Founding pricing for early adopters</h2>
            <div className={styles.pricingGrid}>
               {/* Card 1 */}
               <div className={styles.pCard}>
                  <div className={styles.pTag}>Single Pack</div>
                  <h3 className={styles.pTitle}>單一技能包</h3>
                  <div className={styles.pPrice}>$9.9</div>
                  <ul className={styles.pFeatures}>
                     <li>✓ 任選 1 個技能包</li>
                     <li>✓ 終身更新</li>
                     <li>✓ 適用三大 AI 平台</li>
                  </ul>
                  <Link href="/skill-packs" className={styles.pBtnOutline}>立即購買</Link>
               </div>
               {/* Card 2 */}
               <div className={`${styles.pCard} ${styles.pCardPopular}`}>
                  <div className={styles.pPopularBadge}>最受歡迎</div>
                  <div className={styles.pTag}>5-Pack Bundle</div>
                  <h3 className={styles.pTitle}>5 個技能包組合</h3>
                  <div className={styles.pPriceWrapper}>
                     <span className={styles.pPrice}>$39</span>
                     <span className={styles.pOriginalPrice}>$49.5</span>
                  </div>
                  <ul className={styles.pFeatures}>
                     <li>✓ 任選 5 個技能包</li>
                     <li>✓ 終身更新</li>
                     <li>✓ 適用三大 AI 平台</li>
                  </ul>
                  <Link href="/bundles" className={styles.pBtnPrimary}>立即購買</Link>
               </div>
               {/* Card 3 */}
               <div className={styles.pCard}>
                  <div className={styles.pTag}>Thinking OS / Expert Bundle</div>
                  <h3 className={styles.pTitle}>完整思考系統 + 專家方案</h3>
                  <div className={styles.pPriceWrapper}>
                     <span className={styles.pPrice}>$49</span>
                     <span className={styles.pOriginalPrice}>$79</span>
                  </div>
                  <ul className={styles.pFeatures}>
                     <li>✓ 所有核心技能包 (含新增)</li>
                     <li>✓ 專家工作流體驗</li>
                     <li>✓ 專屬社群與優先支援</li>
                  </ul>
                  <Link href="/bundles" className={styles.pBtnOutline}>立即購買</Link>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Testimonials */}
      <section className={styles.testimonials}>
         <div className="container">
            <h2 className={styles.sectionTitle} style={{marginBottom: '3rem'}}>來自用戶的真實回饋</h2>
            <div className={styles.testiGrid}>
               <div className={styles.tCard}>
                  <div className={styles.tIcon}>📖</div>
                  <h3 className={styles.tQuote}>“不只是會讀，而是會用”</h3>
                  <p className={styles.tDesc}>技能包把知識變成可執行的提示詞與流程，立即上手。</p>
                  <div className={styles.tAuthor}>— 產品經理, 雅加達</div>
               </div>
               <div className={styles.tCard}>
                  <div className={styles.tIcon}>🤖</div>
                  <h3 className={styles.tQuote}>“把 AI 變成低成本顧問”</h3>
                  <p className={styles.tDesc}>每天用技能包解決工作問題，省下時間與預算。</p>
                  <div className={styles.tAuthor}>— 小型電商老闆, 泗水</div>
               </div>
               <div className={styles.tCard}>
                  <div className={styles.tIcon}>🌐</div>
                  <h3 className={styles.tQuote}>“用自己的語言思考與輸出”</h3>
                  <p className={styles.tDesc}>支援印尼語、英文與中文，溝通更自然，影響更大。</p>
                  <div className={styles.tAuthor}>— 自由工作者, 馬來西亞</div>
               </div>
               <div className={styles.tCard}>
                  <div className={styles.tIcon}>🚀</div>
                  <h3 className={styles.tQuote}>“從技能包到工作流系統，一路升級”</h3>
                  <p className={styles.tDesc}>從單點工具延伸成完整系統，工作更專業也更有價值。</p>
                  <div className={styles.tAuthor}>— 顧問, 香港</div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className={styles.bottomCta}>
         <div className="container">
            <div className={styles.ctaWrapper}>
               <div className={styles.ctaText}>
                  <h2>先從一個技能包開始，<br/>讓 AI 幫你把知識變成行動</h2>
               </div>
               <div className={styles.ctaButtons}>
                  <Link href="/skill-packs" className={styles.btnYellow}>立即購買 &gt;</Link>
                  <Link href="/bundles" className={styles.btnDarkOutline}>預覽技能包</Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
