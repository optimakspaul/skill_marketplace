'use client';

import { useState, useMemo, useEffect } from 'react';
import styles from '@/app/library/[id]/page.module.css';

export default function PromptBox({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);
  const [variables, setVariables] = useState<Record<string, string>>({});

  // Parse [variables] from content
  const parsedVariables = useMemo(() => {
    const regex = /\[(.*?)\]/g;
    const matches = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      matches.push(match[1]);
    }
    // Remove duplicates
    return Array.from(new Set(matches));
  }, [content]);

  // Initialize variables state when content changes
  useEffect(() => {
    const initVars: Record<string, string> = {};
    parsedVariables.forEach(v => {
      initVars[v] = '';
    });
    setVariables(initVars);
  }, [parsedVariables]);

  const handleInputChange = (varName: string, value: string) => {
    setVariables(prev => ({
      ...prev,
      [varName]: value
    }));
  };

  // Generate final prompt with replaced variables
  const finalPrompt = useMemo(() => {
    let result = content;
    parsedVariables.forEach(v => {
      const val = variables[v] || `[${v}]`;
      // Global replace for that variable
      result = result.split(`[${v}]`).join(val);
    });
    return result;
  }, [content, parsedVariables, variables]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(finalPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={styles.promptBoxWrapper}>
      {parsedVariables.length > 0 && (
        <div className={styles.variablesPanel}>
          <h3 className={styles.variablesTitle}>✨ 智能填空器</h3>
          <p className={styles.variablesSubtitle}>請填寫以下資訊，系統將自動為您生成專屬 Prompt：</p>
          
          <div className={styles.variablesList}>
            {parsedVariables.map(v => (
              <div key={v} className={styles.variableInputGroup}>
                <label className={styles.variableLabel}>{v}</label>
                <input 
                  type="text" 
                  className={styles.variableInput}
                  placeholder={`請輸入${v}...`}
                  value={variables[v] || ''}
                  onChange={(e) => handleInputChange(v, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.viewerContainer}>
        <div className={styles.instructionBox}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>💡 預覽與複製：</strong>
              <p>完成填寫後，點擊右側按鈕複製完整 Prompt。</p>
            </div>
            <button 
              className={`${styles.btnCopy} ${copied ? styles.copied : ''}`}
              onClick={handleCopy}
            >
              {copied ? '✓ 複製成功' : '📋 複製 Prompt'}
            </button>
          </div>
        </div>

        <pre className={styles.promptCode}>
          {/* We render it char by char or just text, but to highlight we can use dangerouslySetInnerHTML or map */}
          {finalPrompt}
        </pre>
      </div>
    </div>
  );
}
