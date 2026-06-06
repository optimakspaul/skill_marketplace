export interface Section {
  id: string;
  title: string;
  type: 'prompt' | 'article';
  content: string;
}

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
  sections?: Section[];
}

const rawSkillPacks: SkillPack[] = [
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
    sections: [
      {
        id: "intro",
        title: "📖 使用教學",
        type: "article",
        content: "### 為什麼需要問題釐清？\n\n我們常在工作上面對「模糊的指令」或「無法下手的問題」。如果你直接把這些問題丟給 AI，往往會得到非常空泛、沒有幫助的罐頭回覆。\n\n這個 **問題釐清 Master Prompt** 的設計目的，就是讓 AI 反過來「面試你」。它會扮演一個邏輯嚴謹的顧問，透過連續的提問，逼迫你把問題的背景、限制條件、預期目標給定義清楚。\n\n**使用步驟：**\n1. 點擊左側的「📋 Master Prompt」。\n2. 填寫你的初始模糊問題（例如：『我想要提升網站流量』）。\n3. 複製產生的 Prompt，貼到 ChatGPT 或 Claude。\n4. 按照 AI 的提問，一題一題回答它。\n5. 當 AI 收集完足夠資訊後，它會自動輸出一個清晰、可執行的「終極問題定義」。"
      },
      {
        id: "prompt",
        title: "📋 Master Prompt",
        type: "prompt",
        content: "你現在是一位擁有麥肯錫等級邏輯思維的「高階顧問」。\n\n我現在面臨一個問題或挑戰，但我目前的描述可能非常模糊、缺乏背景資訊，或是沒有聚焦在真正的核心。\n\n我的初始問題是：\n[請輸入你的初始模糊問題，例如：我想辦一場行銷活動]\n\n請你「不要」直接給我解決方案。\n請你針對我的初始問題，提出 3 到 5 個**最尖銳、最能釐清問題本質的關鍵提問**，幫助我收斂問題。\n這些提問應該涵蓋：\n1. 這個問題發生的背景與商業脈絡？\n2. 我們擁有哪些限制（預算、時間、人力）？\n3. 什麼樣的結果才算是「成功解決這個問題」？\n\n請一次問我一個問題，引導我一步步回答。當你認為已經完全釐清這個問題的本質後，請幫我輸出一份「終極問題定義書」。"
      }
    ]
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
    sections: [
      {
        id: "intro",
        title: "📖 賣點萃取教學",
        type: "article",
        content: "### 賣點不是規格，是解決方案\n\n電商新手最常犯的錯誤，就是把「產品規格」當作「產品賣點」。\n消費者不在乎你的吹風機馬達是幾轉的，他們只在乎「早上能不能多睡五分鐘，而且吹完頭髮不會毛躁」。\n\n這個 **商品賣點萃取 Prompt** 融合了 FAB 銷售法則 (Feature, Advantage, Benefit)。只要你輸入生硬的規格，它就能自動幫你翻譯成「打動人心的痛點解方」。\n\n**使用場景：**\n- 撰寫一頁式 Landing Page 前的策略企劃。\n- 發想 FB/IG 廣告文案的切入點。\n- 培訓客服人員的銷售話術。"
      },
      {
        id: "prompt",
        title: "📋 賣點轉換 Prompt",
        type: "prompt",
        content: "你現在是一位身經百戰的「王牌電商文案企劃」，深諳消費者心理學與 FAB 銷售法則。\n\n我有一項產品即將上市，以下是該產品的客觀規格與資訊：\n產品名稱：[請輸入產品名稱，例如：零重力護脊辦公椅]\n產品規格與特色：\n[請列出產品特色，例如：1. 採用航空級鋁合金 2. 具有六向調節扶手 3. 仿脊椎曲線椅背]\n\n我的目標客群是：[請描述目標客群，例如：每天坐在電腦前超過 8 小時的工程師與設計師]\n\n請幫我執行以下任務：\n1. **痛點共鳴**：分析這群目標客群在生活中面臨最大的 3 個痛點是什麼？（要具體且有畫面感）\n2. **FAB 轉換**：將我提供的每一個「規格 (Feature)」，轉譯為「優勢 (Advantage)」，最後提煉出對消費者的「終極好處 (Benefit)」。\n3. **獨特價值主張 (UVP)**：請用一句 20 字以內的精煉短語，總結這個產品為什麼值得他們現在立刻購買。\n\n請用清晰的表格與列點式呈現你的分析結果。"
      }
    ]
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

const defaultSections: Section[] = [
  {
    id: "intro",
    title: "📖 使用教學 (準備中)",
    type: "article",
    content: "### 內容建置中\n\n這個技能包的專屬教學內容與真實 Prompt 正在由專家精心籌備中！\n\n在 MVP 測試階段，您可以先體驗我們為 **「問題釐清 (sp-01)」** 與 **「商品怎麼賣才吸引人 (sp-05)」** 準備的完整範例功能。"
  },
  {
    id: "prompt",
    title: "📋 Master Prompt (體驗版)",
    type: "prompt",
    content: "這是一個通用的智能填空器體驗版。\n\n我的主要問題是：[請輸入您的問題]\n我希望達成的目標是：[請輸入預期目標]\n\n請根據以上資訊，用條理分明的方式給我建議。"
  }
];

export const skillPacks: SkillPack[] = rawSkillPacks.map(pack => ({
  ...pack,
  sections: pack.sections || defaultSections
}));

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
