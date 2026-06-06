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
}

export const skillPacks: SkillPack[] = [
  {
    id: "sp-001",
    title: "問題釐清 Skill Pack",
    description: "快速釐清問題核心，聚焦關鍵，避免無效努力。",
    price: 9.9,
    icon: "❓",
    tags: ["跨語言", "可交叉使用"],
    features: ["6大模組內容", "可立即複製使用", "適用 ChatGPT / Claude / Gemini"],
    isHot: true,
  },
  {
    id: "sp-002",
    title: "根因分析 Skill Pack",
    description: "深入挖掘問題根因，找出真正影響結果的因素。",
    price: 9.9,
    icon: "🔍",
    tags: ["跨語言", "適用三大 AI 平台"],
    features: ["5大模組內容", "可立即複製使用", "適用 ChatGPT / Claude / Gemini"],
    isHot: true,
  },
  {
    id: "sp-003",
    title: "營收增長 Skill Pack",
    description: "從策略到執行，打造可持續的營收成長方案。",
    price: 9.9,
    icon: "📈",
    tags: ["跨語言", "可交叉使用"],
    features: ["實戰案例範本", "適用三大 AI 平台", "多語言支援"],
    isHot: true,
  },
  {
    id: "sp-004",
    title: "客戶旅程 Skill Pack",
    description: "繪製與優化客戶旅程，提升轉換率與體驗。",
    price: 9.9,
    icon: "🗺️",
    tags: ["跨語言", "適用三大 AI 平台"],
    features: ["旅程畫布模板", "接觸點分析提示詞"],
    isNew: true,
  },
  {
    id: "sp-005",
    title: "SOP 生成 Skill Pack",
    description: "快速生成標準作業流程，打造可複製的營運系統。",
    price: 9.9,
    icon: "📄",
    tags: ["跨語言", "可交叉使用"],
    features: ["多種SOP範本", "結構化輸出Prompt"],
  },
  {
    id: "sp-006",
    title: "AI 導入診斷 Skill Pack",
    description: "評估導入可行性，規劃 AI 應用藍圖與優先順序。",
    price: 9.9,
    icon: "🤖",
    tags: ["跨語言", "適用三大 AI 平台"],
    features: ["診斷問卷", "報告生成提示詞"],
    isNew: true,
  },
  {
    id: "sp-007",
    title: "決策權衡 Skill Pack",
    description: "分析選項與權衡利弊，做出更好的決策。",
    price: 9.9,
    icon: "⚖️",
    tags: ["跨語言", "可交叉使用"],
    features: ["決策矩陣", "優劣勢分析"],
  },
  {
    id: "sp-008",
    title: "每週優化檢討 Skill Pack",
    description: "建立每週檢討流程，持續優化目標與行動。",
    price: 9.9,
    icon: "📅",
    tags: ["跨語言", "新手友善"],
    features: ["週報範本", "覆盤引導"],
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
