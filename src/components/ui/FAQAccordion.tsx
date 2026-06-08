'use client';

import { useState } from 'react';
import styles from './FAQAccordion.module.css';

const faqs = [
  {
    q: "這些技能包可以在哪些 AI 平台上使用？",
    a: "我們的技能包經過優化，在 ChatGPT、Claude、Gemini 等主流 AI 平台上都能完美運行。您只需要複製貼上即可。"
  },
  {
    q: "購買後可以永久使用嗎？",
    a: "是的，一次購買，永久存取。我們未來若對該技能包進行升級（例如加入新框架或優化 Prompt），您也能免費獲得更新。"
  },
  {
    q: "我不懂寫程式或下 Prompt 可以用嗎？",
    a: "完全可以！這正是我們開發 Optimaks 的初衷。您只需要進入「我的圖書館」，使用我們的「智能填空器」，填寫您目前的狀況，系統就會自動幫您組合成完美的 Prompt。"
  },
  {
    q: "技能包和一般網路上的免費 Prompt 有什麼不同？",
    a: "免費 Prompt 通常只提供單一點的對話引導，而我們的技能包是將知名商業書籍或專家框架，轉化為一整套「工作流系統」。它不僅能幫助您提問，更能引導您進行深度思考與策略規劃。"
  },
  {
    q: "如果我購買後覺得不適用，可以退款嗎？",
    a: "我們提供 7 天無條件退款保證。如果您覺得技能包無法幫助到您的工作，只需透過客服信箱聯繫我們，我們將全額退費。"
  },
  {
    q: "我可以使用手機操作技能包嗎？",
    a: "沒問題！只要您的手機可以開啟瀏覽器或 AI 官方 App（如 ChatGPT App），就能無縫複製並執行這些技能包指令。"
  },
  {
    q: "組合方案可以自己挑選想要的技能包嗎？",
    a: "可以的，我們的「5 個技能包組合」可以讓您在全站自由挑選任 5 款技能包，結帳時系統會自動套用組合優惠價。"
  },
  {
    q: "購買後多久可以開始使用？",
    a: "付款完成後，系統會自動開通您的權限。您可以立即登入「我的圖書館」查看並開始使用您購買的所有技能包。"
  },
  {
    q: "你們會提供發票或收據嗎？",
    a: "會的，我們在您完成付款後，會將電子收據（Receipt）發送到您註冊的電子郵件信箱。如果您需要報帳用的統一編號，請在結帳頁面填寫相關資訊。"
  },
  {
    q: "如果我有操作上的問題，可以找誰協助？",
    a: "您可以隨時透過網站右下角的客服按鈕，或是寄信至我們的支援信箱。我們的工作團隊會在 24 小時內協助您解決問題。"
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
            onClick={() => toggleOpen(index)}
          >
            <div className={styles.faqHeader}>
              <h3 className={styles.faqQ}>Q: {faq.q}</h3>
              <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
            </div>
            <div 
              className={styles.faqBody} 
              style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
            >
              <div className={styles.faqInner}>
                <p className={styles.faqA}>A: {faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
