import { skillPacks, bundles } from '@/lib/seed';
import SkillPackCard from '@/components/ui/SkillPackCard';
import styles from './page.module.css';

export default function MarketplacePage() {
  return (
    <div className={styles.page}>
      {/* Hero Header */}
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>探索所有的技能包</h1>
          <p className={styles.heroSubtitle}>
            從問題釐清、營收成長、SOP、AI 導入到職涯升級，找到最適合你的 AI 顧問型技能工具。<br />
            適用 ChatGPT / Claude / Gemini，跨語言使用，可交叉組合。
          </p>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="🔍 搜尋技能包..." className={styles.searchInput} />
          </div>
          <div className={styles.quickFilters}>
            <button className={`${styles.filterPill} ${styles.active}`}>全部</button>
            <button className={styles.filterPill}>熱門</button>
            <button className={styles.filterPill}>思考類</button>
            <button className={styles.filterPill}>商業類</button>
            <button className={styles.filterPill}>工作流類</button>
            <button className={styles.filterPill}>職涯類</button>
            <button className={styles.filterPill}>印尼市場</button>
            <button className={styles.filterPill}>綜合推薦</button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={`container ${styles.mainLayout}`}>
        {/* Sidebar Filters */}
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>類型</h3>
            <label className={styles.filterLabel}><input type="checkbox" /> 思考類 (4)</label>
            <label className={styles.filterLabel}><input type="checkbox" /> 商業類 (6)</label>
            <label className={styles.filterLabel}><input type="checkbox" /> 工作流類 (3)</label>
            <label className={styles.filterLabel}><input type="checkbox" /> 職涯類 (3)</label>
            <label className={styles.filterLabel}><input type="checkbox" /> 印尼市場 (2)</label>
          </div>
          
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>使用情境</h3>
            <label className={styles.filterLabel}><input type="checkbox" /> 策略規劃 (6)</label>
            <label className={styles.filterLabel}><input type="checkbox" /> 營運優化 (7)</label>
            <label className={styles.filterLabel}><input type="checkbox" /> 行銷銷售 (5)</label>
            <label className={styles.filterLabel}><input type="checkbox" /> 個人成長 (4)</label>
            <label className={styles.filterLabel}><input type="checkbox" /> 團隊協作 (3)</label>
          </div>

          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>適用平台</h3>
            <label className={styles.filterLabel}><input type="checkbox" /> ChatGPT</label>
            <label className={styles.filterLabel}><input type="checkbox" /> Claude</label>
            <label className={styles.filterLabel}><input type="checkbox" /> Gemini</label>
          </div>

          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>價格</h3>
            <label className={styles.filterLabel}><input type="radio" name="price" defaultChecked /> 全部</label>
            <label className={styles.filterLabel}><input type="radio" name="price" /> $0 - $9.9</label>
            <label className={styles.filterLabel}><input type="radio" name="price" /> $10 - $19.9</label>
            <label className={styles.filterLabel}><input type="radio" name="price" /> $20 以上</label>
          </div>
        </aside>

        {/* Product Grid */}
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <span className={styles.resultCount}>共 {skillPacks.length} 個技能包</span>
            <div className={styles.sortContainer}>
              <span className={styles.sortLabel}>排序：</span>
              <select className={styles.sortSelect}>
                <option>最熱門</option>
                <option>最新上架</option>
                <option>價格由低到高</option>
                <option>最適合新手</option>
              </select>
            </div>
          </div>
          
          <div className={styles.grid}>
            {skillPacks.map(pack => (
              <SkillPackCard key={pack.id} pack={pack} />
            ))}
            {/* Adding some duplicated dummy packs to fill the grid like the mockup */}
            {skillPacks.map(pack => (
               <SkillPackCard key={`${pack.id}-copy`} pack={{...pack, id: `${pack.id}-copy`}} />
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Bundles Section */}
      <section className={styles.bundlesSection}>
        <div className="container">
          <h2 className={styles.bundlesTitle}>不知道怎麼選？從這些熱門組合開始</h2>
          <div className={styles.bundleCardsGrid}>
            <div className={styles.bundleCardSmall}>
              <div className={styles.bundleBadge}>熱門組合</div>
              <div className={styles.bundleEquation}>
                <span>🎯 問題釐清</span> + <span>🔍 根因分析</span>
              </div>
              <div className={styles.bundleArrow}>↓</div>
              <div className={styles.bundleResult}>深度問題診斷</div>
              <div className={styles.bundleDesc}>釐清問題並找到根因，提出高品質解決方案。</div>
              <div className={styles.bundleFooter}>
                <span className={styles.bundlePrice}>$18.8 <span className={styles.strike}>$19.8</span></span>
                <button className={styles.btnSecondary}>查看組合詳情</button>
              </div>
            </div>
            
            <div className={styles.bundleCardSmall}>
              <div className={styles.bundleBadge}>推薦組合</div>
              <div className={styles.bundleEquation}>
                <span>📈 營收增長</span> + <span>🗺️ 客戶旅程</span>
              </div>
              <div className={styles.bundleArrow}>↓</div>
              <div className={styles.bundleResult}>成交漏斗優化</div>
              <div className={styles.bundleDesc}>設計成長漏斗與優化旅程，提升轉換與營收。</div>
              <div className={styles.bundleFooter}>
                <span className={styles.bundlePrice}>$18.8 <span className={styles.strike}>$19.8</span></span>
                <button className={styles.btnSecondary}>查看組合詳情</button>
              </div>
            </div>
            
            <div className={styles.bundleCardSmall}>
              <div className={styles.bundleBadge}>新手首選</div>
              <div className={styles.bundleEquation}>
                <span>📄 SOP生成</span> + <span>🤖 AI導入診斷</span>
              </div>
              <div className={styles.bundleArrow}>↓</div>
              <div className={styles.bundleResult}>AI 自動化流程設計</div>
              <div className={styles.bundleDesc}>生成 SOP 並導入 AI，快速建立自動化流程。</div>
              <div className={styles.bundleFooter}>
                <span className={styles.bundlePrice}>$18.8 <span className={styles.strike}>$19.8</span></span>
                <button className={styles.btnSecondary}>查看組合詳情</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
