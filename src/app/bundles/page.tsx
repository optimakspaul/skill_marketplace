import FormulaBundleCard from '@/components/ui/FormulaBundleCard';
import styles from './page.module.css';

export default function BundlesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>專家推薦組合方案</h1>
          <p className={styles.heroSubtitle}>
            不知道怎麼選？我們將最常被一起使用的技能包配對，為您提供更強大的複合解決方案。
            <br />
            任選 2 件系統將自動為您折抵 $1 USD。
          </p>
        </div>
      </div>

      <div className={`container ${styles.bundlesContainer}`}>
        <div className={styles.bundleCardsGrid}>
          {/* 1. 深度問題診斷 */}
          <FormulaBundleCard
            badgeText="熱門組合"
            badgeColor="#2563eb"
            item1Icon="❓"
            item1Title="問題釐清"
            item2Icon="🔄"
            item2Title="問題為何發生"
            resultTitle="深度問題診斷"
            resultDesc="不只把模糊問題問清楚，更挖出不斷重複發生的底層根因。"
            price={18.8}
            originalPrice={19.8}
            packIds={['sp-01', 'sp-02']}
          />

          {/* 2. 爆品行銷煉金術 */}
          <FormulaBundleCard
            badgeText="電商必備"
            badgeColor="#ec4899"
            item1Icon="🛍️"
            item1Title="商品賣點"
            item2Icon="📝"
            item2Title="廣告文案"
            resultTitle="爆品行銷煉金術"
            resultDesc="從精煉商品獨特差異化，到產出高轉換率的社群文案。"
            price={18.8}
            originalPrice={19.8}
            packIds={['sp-05', 'sp-06']}
          />

          {/* 3. 企業自動化引擎 */}
          <FormulaBundleCard
            badgeText="老闆最愛"
            badgeColor="#10b981"
            item1Icon="📄"
            item1Title="流程標準化"
            item2Icon="⏳"
            item2Title="省時間策略"
            resultTitle="企業自動化引擎"
            resultDesc="把日常工作變 SOP，並找出可刪除或 AI 化的工作，解放老闆時間。"
            price={18.8}
            originalPrice={19.8}
            packIds={['sp-11', 'sp-12']}
          />

          {/* 4. 業績狂飆系統 */}
          <FormulaBundleCard
            badgeText="營收突破"
            badgeColor="#f59e0b"
            item1Icon="📉"
            item1Title="流量沒訂單"
            item2Icon="🎁"
            item2Title="促銷活動"
            resultTitle="業績狂飆系統"
            resultDesc="抓出成交轉換率的卡點，並搭配檔期折扣活動衝高客單價。"
            price={18.8}
            originalPrice={19.8}
            packIds={['sp-07', 'sp-08']}
          />

          {/* 5. 護城河解析雷達 */}
          <FormulaBundleCard
            badgeText="財經研究"
            badgeColor="#8b5cf6"
            item1Icon="💰"
            item1Title="看懂財報"
            item2Icon="🏢"
            item2Title="產業研究"
            resultTitle="護城河解析雷達"
            resultDesc="看懂公司營收與現金流體質，同時研究競爭者與商業模式。"
            price={18.8}
            originalPrice={19.8}
            packIds={['sp-13', 'sp-14']}
          />

          {/* 6. 高效推進力 */}
          <FormulaBundleCard
            badgeText="職場必備"
            badgeColor="#06b6d4"
            item1Icon="🎯"
            item1Title="目標拆解"
            item2Icon="🗣️"
            item2Title="說服別人"
            resultTitle="目標高效推進力"
            resultDesc="把大目標拆成可執行的任務，並用高明的話術說服團隊配合。"
            price={18.8}
            originalPrice={19.8}
            packIds={['sp-03', 'sp-04']}
          />

          {/* 7. 財經自媒體大師 */}
          <FormulaBundleCard
            badgeText="創作必備"
            badgeColor="#ef4444"
            item1Icon="📰"
            item1Title="事件解讀"
            item2Icon="💡"
            item2Title="觀點生成"
            resultTitle="財經自媒體大師"
            resultDesc="快速解析最新財經事件與政策影響，並立刻轉化為高含金量的短影音或貼文。"
            price={18.8}
            originalPrice={19.8}
            packIds={['sp-16', 'sp-15']}
          />

          {/* 8. 商業破局系統 */}
          <FormulaBundleCard
            badgeText="跨界融合"
            badgeColor="#6366f1"
            item1Icon="📈"
            item1Title="生意做大"
            item2Icon="🏢"
            item2Title="產業研究"
            resultTitle="商業破局系統"
            resultDesc="突破自身企業盲點，同時研究對手與跨領域商業模式，找出全新增長曲線。"
            price={18.8}
            originalPrice={19.8}
            packIds={['sp-09', 'sp-14']}
          />

          {/* 9. 高轉化客服術 */}
          <FormulaBundleCard
            badgeText="溝通心理"
            badgeColor="#14b8a6"
            item1Icon="💬"
            item1Title="客戶訊息"
            item2Icon="🗣️"
            item2Title="說服別人"
            resultTitle="高轉化客服術"
            resultDesc="結合溝通心理學與客服實戰範本，不僅秒回客戶，更能提升信任感與成交率。"
            price={18.8}
            originalPrice={19.8}
            packIds={['sp-10', 'sp-04']}
          />

        </div>
      </div>
    </div>
  );
}
