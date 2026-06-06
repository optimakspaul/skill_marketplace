export interface SkillPack {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
  tags: string[];
  features: string[];
  isNew?: boolean;
  isHot?: boolean;
  promptContent?: string;
  downloadUrl?: string;
  category?: string;
}

export const skillPacks: SkillPack[] = [
  // 1. 問題解決支線
  {
    id: "sp-01",
    title: "問題釐清",
    description: "把模糊問題問清楚，聚焦核心關鍵。",
    price: 9.9,
    icon: "❓",
    tags: ["跨語言", "可交叉使用"],
    features: ["核心問題對焦", "可立即複製使用", "適用三大 AI 平台"],
    isHot: true,
    category: "問題解決",
  },
  {
    id: "sp-02",
    title: "問題為什麼一直發生？",
    description: "找出重複問題的真正原因，避免治標不治本。",
    price: 9.9,
    icon: "🔄",
    tags: ["跨語言", "根因挖掘"],
    features: ["連續追問框架", "根本原因分析", "適用三大 AI 平台"],
    isHot: true,
    category: "問題解決",
  },
  {
    id: "sp-03",
    title: "目標拆解與行動計畫",
    description: "把大目標拆成可執行步驟，落地執行。",
    price: 9.9,
    icon: "🎯",
    tags: ["跨語言", "執行力"],
    features: ["SMART目標框架", "里程碑設定", "適用三大 AI 平台"],
    category: "問題解決",
  },
  {
    id: "sp-04",
    title: "我該怎麼說服別人？",
    description: "把想法變成更容易被接受的說法，提升溝通勝率。",
    price: 9.9,
    icon: "🗣️",
    tags: ["跨語言", "溝通技巧"],
    features: ["受眾心理分析", "說服力框架", "適用三大 AI 平台"],
    category: "問題解決",
  },
  
  // 2. 電商專用支線
  {
    id: "sp-05",
    title: "商品怎麼賣才吸引人？",
    description: "提煉商品賣點與差異化，打造熱銷爆品。",
    price: 9.9,
    icon: "🛍️",
    tags: ["跨語言", "電商必備"],
    features: ["賣點萃取", "獨特價值主張", "適用三大 AI 平台"],
    isHot: true,
    category: "電商專用",
  },
  {
    id: "sp-06",
    title: "廣告文案怎麼寫？",
    description: "產出 FB / IG / TikTok 廣告文案，提升點擊率。",
    price: 9.9,
    icon: "📝",
    tags: ["跨語言", "社群行銷"],
    features: ["吸睛標題庫", "多平台文案生成", "適用三大 AI 平台"],
    category: "電商專用",
  },
  {
    id: "sp-07",
    title: "為什麼有流量沒訂單？",
    description: "優化商品頁與成交頁，找出轉換率卡點。",
    price: 9.9,
    icon: "📉",
    tags: ["跨語言", "漏斗優化"],
    features: ["瀏覽動線分析", "抗拒點消除", "適用三大 AI 平台"],
    category: "電商專用",
  },
  {
    id: "sp-08",
    title: "促銷活動怎麼做？",
    description: "設計折扣、組合包與檔期活動，衝高客單價。",
    price: 9.9,
    icon: "🎁",
    tags: ["跨語言", "活動企劃"],
    features: ["促銷玩法設計", "利潤試算框架", "適用三大 AI 平台"],
    category: "電商專用",
  },

  // 3. 小老闆專用支線
  {
    id: "sp-09",
    title: "生意怎麼做大？",
    description: "找出獲客、成交、回購、營運卡點，突破成長天花板。",
    price: 9.9,
    icon: "📈",
    tags: ["跨語言", "商業模式"],
    features: ["商業體檢表", "增長槓桿分析", "適用三大 AI 平台"],
    isHot: true,
    category: "小老闆專用",
  },
  {
    id: "sp-10",
    title: "客戶訊息怎麼回？",
    description: "產出 WhatsApp / 私訊 / Line 回覆模板，提升客服效率。",
    price: 9.9,
    icon: "💬",
    tags: ["跨語言", "客戶關係"],
    features: ["常見問題罐頭回覆", "客訴處理框架", "適用三大 AI 平台"],
    category: "小老闆專用",
  },
  {
    id: "sp-11",
    title: "流程怎麼標準化？",
    description: "把日常工作變成 SOP，打造可複製的營運系統。",
    price: 9.9,
    icon: "📄",
    tags: ["跨語言", "營運優化"],
    features: ["SOP 提取技術", "標準化檢核表", "適用三大 AI 平台"],
    category: "小老闆專用",
  },
  {
    id: "sp-12",
    title: "我可以怎麼省時間？",
    description: "找出可刪除、簡化、外包、AI 化的工作，釋放老闆時間。",
    price: 9.9,
    icon: "⏳",
    tags: ["跨語言", "時間管理"],
    features: ["工作審查框架", "AI 自動化評估", "適用三大 AI 平台"],
    category: "小老闆專用",
  },

  // 4. 財經專用支線
  {
    id: "sp-13",
    title: "這家公司賺不賺錢？",
    description: "看懂營收、毛利、現金流、負債，快速掌握企業體質。",
    price: 9.9,
    icon: "💰",
    tags: ["跨語言", "財報分析"],
    features: ["財報三表解讀", "關鍵指標提取", "適用三大 AI 平台"],
    category: "財經專用",
  },
  {
    id: "sp-14",
    title: "產業與公司懶人研究",
    description: "快速整理公司、產業、競爭者與商業模式，洞察市場。",
    price: 9.9,
    icon: "🏢",
    tags: ["跨語言", "產業研究"],
    features: ["商業模式畫布", "競品分析框架", "適用三大 AI 平台"],
    isHot: true,
    category: "財經專用",
  },
  {
    id: "sp-15",
    title: "財經觀點生成",
    description: "幫財經創作者產出分析框架、貼文與短影音腳本。",
    price: 9.9,
    icon: "💡",
    tags: ["跨語言", "內容創作"],
    features: ["觀點萃取", "腳本結構化", "適用三大 AI 平台"],
    category: "財經專用",
  },
  {
    id: "sp-16",
    title: "財經事件快速解讀",
    description: "快速看懂財報、利率、匯率、政策、產業消息的影響。",
    price: 9.9,
    icon: "📰",
    tags: ["跨語言", "總經分析"],
    features: ["事件影響分析", "趨勢推演框架", "適用三大 AI 平台"],
    category: "財經專用",
  }
];

export interface Bundle {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  packIds: string[];
  features: string[];
  isPopular?: boolean;
}

export const bundles: Bundle[] = [
  {
    id: "b-001",
    title: "5-Pack Bundle",
    description: "5 個熱銷包組合",
    price: 39,
    originalPrice: 49.5,
    packIds: ["sp-001", "sp-002", "sp-003", "sp-004", "sp-005"],
    features: ["任選 5 個技能包", "終身更新", "適用三大 AI 平台"],
    isPopular: true,
  },
  {
    id: "b-002",
    title: "Thinking OS / Expert Bundle",
    description: "完整思考系統 + 專家方案",
    price: 49,
    originalPrice: 79,
    packIds: ["sp-001", "sp-002", "sp-003", "sp-004", "sp-005", "sp-006", "sp-007", "sp-008"],
    features: ["所有核心技能包 (含新增)", "專家工作流體驗", "專屬社群與優先支援"],
  }
];
