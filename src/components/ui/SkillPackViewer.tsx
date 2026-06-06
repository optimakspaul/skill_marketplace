'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/library/[id]/page.module.css';
import { SkillPack, Section } from '@/lib/seed';
import PromptBox from './PromptBox';

export default function SkillPackViewer({ pack }: { pack: SkillPack }) {
  // Use sections if available, otherwise fallback to empty array
  const sections = pack.sections || [];
  const [activeSectionId, setActiveSectionId] = useState<string>(
    sections.length > 0 ? sections[0].id : ''
  );

  const activeSection = sections.find(s => s.id === activeSectionId);

  return (
    <div className={styles.page}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/library" className={styles.backLink}>← 回到我的圖書館</Link>
          <div className={styles.packInfo}>
            <div className={styles.packIcon}>{pack.icon}</div>
            <h2 className={styles.packTitle}>{pack.title}</h2>
          </div>
        </div>
        
        <nav className={styles.sidebarNav}>
          {sections.length > 0 ? (
            sections.map(section => (
              <div 
                key={section.id}
                className={`${styles.navItem} ${activeSectionId === section.id ? styles.active : ''}`}
                onClick={() => setActiveSectionId(section.id)}
              >
                {section.title}
              </div>
            ))
          ) : (
             <div className={`${styles.navItem} ${styles.active}`}>📋 尚未建置內容</div>
          )}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className={styles.content}>
        {activeSection ? (
          <>
            <div className={styles.contentHeader}>
              <h1 className={styles.contentTitle}>{activeSection.title}</h1>
            </div>

            {/* Check if it's an article or a prompt */}
            {activeSection.type === 'article' ? (
              <div className={styles.viewerContainer}>
                <div 
                  className={styles.articleContent}
                  dangerouslySetInnerHTML={{ 
                    // Basic Markdown to HTML conversion for demo purposes
                    __html: activeSection.content
                      .replace(/\n\n/g, '<br/><br/>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/### (.*?)\n/g, '<h3>$1</h3>')
                      .replace(/- (.*?)\n/g, '<li>$1</li>')
                  }} 
                />
              </div>
            ) : (
              <PromptBox content={activeSection.content} />
            )}
          </>
        ) : (
          <div className={styles.viewerContainer}>
            <div className={styles.instructionBox}>
              <p>此技能包目前沒有建置詳細內容。</p>
            </div>
            {pack.promptContent && (
               <PromptBox content={pack.promptContent} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
