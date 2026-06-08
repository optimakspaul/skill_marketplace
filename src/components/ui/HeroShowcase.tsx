'use client';

import { useState, useEffect } from 'react';
import styles from './HeroShowcase.module.css';

const levels = [
  {
    id: 1,
    title: "Level 1：單點突破",
    elements: [
      { type: 'pack', icon: '❓', text: '問題釐清' }
    ],
    result: "找出真正的核心問題"
  },
  {
    id: 2,
    title: "Level 2：雙效連擊",
    elements: [
      { type: 'pack', icon: '🛍️', text: '商品賣點' },
      { type: 'pack', icon: '📝', text: '廣告文案' }
    ],
    result: "產出高轉化爆款素材"
  },
  {
    id: 3,
    title: "Level 3：專家系統",
    elements: [
      { type: 'pack', icon: '❓', text: '問題釐清' },
      { type: 'pack', icon: '📈', text: '營收增長' },
      { type: 'expert', icon: '🧠', text: '專家: Steve Jobs' }
    ],
    result: "顛覆性產品決策"
  }
];

export default function HeroShowcase() {
  const [activeLevel, setActiveLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLevel((prev) => (prev + 1) % levels.length);
    }, 4000); // Switch every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.showcaseWrapper}>
      <div className={styles.levelIndicators}>
        {levels.map((lvl, idx) => (
          <div 
            key={lvl.id} 
            className={`${styles.indicator} ${idx === activeLevel ? styles.indicatorActive : ''}`}
            onClick={() => setActiveLevel(idx)}
          >
            {lvl.title}
          </div>
        ))}
      </div>
      
      <div className={styles.showcaseContent}>
        {levels.map((lvl, idx) => (
          <div 
            key={lvl.id} 
            className={`${styles.levelView} ${idx === activeLevel ? styles.levelViewActive : ''}`}
          >
            <div className={styles.equation}>
              {lvl.elements.map((el, elIdx) => (
                <div key={elIdx} className={styles.equationPart}>
                  {elIdx > 0 && <span className={styles.mathSign}>+</span>}
                  <div className={`${styles.elementCard} ${el.type === 'expert' ? styles.expertCard : ''}`}>
                    <span className={styles.elIcon}>{el.icon}</span>
                    <span className={styles.elText}>{el.text}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.resultArrow}>↓</div>
            
            <div className={styles.resultCard}>
              {lvl.result}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
