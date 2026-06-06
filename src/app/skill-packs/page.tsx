'use client';

import { useState } from 'react';
import { skillPacks } from '@/lib/seed';
import SkillPackCard from '@/components/ui/SkillPackCard';
import styles from './page.module.css';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const categories = ['全部', '熱門推薦', '問題解決', '電商專用', '小老闆專用', '財經專用'];

  const filteredPacks = skillPacks.filter(pack => {
    // Category Filter
    let matchesCategory = false;
    if (selectedCategory === '全部') matchesCategory = true;
    else if (selectedCategory === '熱門推薦') matchesCategory = pack.isHot === true;
    else matchesCategory = pack.category === selectedCategory;

    // Search Filter
    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      matchesSearch = 
        pack.title.toLowerCase().includes(q) || 
        pack.description.toLowerCase().includes(q);
    }

    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.page}>
      {/* Hero Header */}
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>探索所有的技能包</h1>
          <p className={styles.heroSubtitle}>
            從問題解決、電商營運、管理流程到財經研究，找到最適合你的 AI 顧問型技能工具。<br />
            適用 ChatGPT / Claude / Gemini，跨語言使用，可交叉組合。
          </p>
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="🔍 搜尋技能包..." 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.quickFilters}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`${styles.filterPill} ${selectedCategory === cat ? styles.active : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={`container ${styles.mainLayout}`}>
        {/* Product Grid */}
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <span className={styles.resultCount}>共 {filteredPacks.length} 個技能包</span>
            <div className={styles.sortContainer}>
               {/* 移除複雜的排序下拉，保持畫面乾淨 */}
            </div>
          </div>
          
          <div className={styles.grid}>
            {filteredPacks.map(pack => (
              <SkillPackCard key={pack.id} pack={pack} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
