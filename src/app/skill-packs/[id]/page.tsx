import Link from 'next/link';
import { skillPacks } from '@/lib/seed';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import AddToCartButton from '@/components/ui/AddToCartButton';

export default async function SkillPackDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const pack = skillPacks.find(p => p.id === resolvedParams.id) || skillPacks[0];

  if (!pack) {
    notFound();
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let hasPurchased = false
  if (user) {
    const { data: purchase } = await supabase
      .from('purchases')
      .select('id')
      .eq('user_id', user.id)
      .eq('product_id', pack.id)
      .single()
      
    if (purchase) {
      hasPurchased = true
    }
  }

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumbContainer}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">首頁</Link> / <Link href="/skill-packs">技能包</Link> / <span>{pack.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroLayout}`}>
          <div className={styles.heroContent}>
            <div className={styles.packHeader}>
               <div className={styles.heroIcon}>{pack.icon}</div>
               <div>
                  <div className={styles.priceTag}>單一產品 $9.9</div>
                  <h1 className={styles.title}>{pack.title}</h1>
               </div>
            </div>
            
            <p className={styles.subtitle}>
              把模糊問題變清楚，讓 AI 幫你問對問題、聚焦關鍵、找到下一步。
            </p>
            <p className={styles.platformText}>
              適用 ChatGPT / Claude / Gemini・跨語言使用・適合個人與小型團隊
            </p>

            <div className={styles.actions}>
              {hasPurchased ? (
                <Link href={`/library/${pack.id}`} className={styles.btnPrimary}>
                  前往我的圖書館 / 取得內容
                </Link>
              ) : (
                <>
                  <AddToCartButton pack={pack} className={styles.btnPrimary} />
                  <Link href="/cart" className={styles.btnOutline} style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>
                    前往購物車
                  </Link>
                </>
              )}
            </div>

            <div className={styles.tagsContainer}>
              <span className={styles.platformTag}>🌐 跨語言</span>
              <span className={styles.platformTag}>🤖 適用三大 AI 平台</span>
              <span className={styles.platformTag}>🔀 可交叉組合</span>
              <span className={styles.platformTag}>🕒 顧問型技能包</span>
            </div>
          </div>

          <div className={styles.heroCard}>
            <h3 className={styles.cardTitle}>此技能包包含</h3>
            <div className={styles.includedGrid}>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}>📋</div>
                <div>Master Prompt</div>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}>👤</div>
                <div>AI 角色設定</div>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}>📝</div>
                <div>輸入表單</div>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}>📄</div>
                <div>輸出模板</div>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}>💡</div>
                <div>實戰案例</div>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}>📖</div>
                <div>使用教學</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Left: Content, Right: Sticky Buy) */}
      <div className={`container ${styles.mainLayout}`}>
        <div className={styles.mainContent}>
          {/* Section 1: Modules */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. 技能包內容 <span className={styles.sectionNote}>(購買後可立即複製使用)</span></h2>
            <div className={styles.moduleGrid}>
              <div className={`${styles.moduleCard} ${styles.moduleHighlight}`}>
                <div className={styles.mIcon}>📋</div>
                <h4 className={styles.mTitle}>Master Prompt</h4>
                <p className={styles.mDesc}>經提煉的主提示詞，讓 AI 精準引導對話與分析。</p>
              </div>
              <div className={styles.moduleCard}>
                <div className={styles.mIcon}>👤</div>
                <h4 className={styles.mTitle}>AI 角色設定</h4>
                <p className={styles.mDesc}>專業顧問角色與任務設定，提升對話品質。</p>
              </div>
              <div className={styles.moduleCard}>
                <div className={styles.mIcon}>📝</div>
                <h4 className={styles.mTitle}>輸入表單</h4>
                <p className={styles.mDesc}>情境輸入欄位模板，讓你快速提供必要資訊。</p>
              </div>
              <div className={styles.moduleCard}>
                <div className={styles.mIcon}>📄</div>
                <h4 className={styles.mTitle}>輸出模板</h4>
                <p className={styles.mDesc}>清晰的輸出結構，便於決策與執行。</p>
              </div>
              <div className={styles.moduleCard}>
                <div className={styles.mIcon}>👥</div>
                <h4 className={styles.mTitle}>實戰案例</h4>
                <p className={styles.mDesc}>真實情境與完整對話範例參考。</p>
              </div>
              <div className={styles.moduleCard}>
                <div className={styles.mIcon}>⚙️</div>
                <h4 className={styles.mTitle}>使用教學</h4>
                <p className={styles.mDesc}>步驟教學與使用建議，新手也能快上手。</p>
              </div>
            </div>
          </section>

          {/* Section 2: How to use */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. 如何使用這個技能包</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineStep}>
                <div className={styles.tIconWrapper}><div className={styles.tIcon}>1️⃣</div></div>
                <div className={styles.tContent}>
                  <div className={styles.tStep}>Step 1</div>
                  <h4 className={styles.tTitle}>描述你的情境</h4>
                  <p className={styles.tDesc}>簡單描述你的問題或目前面對的困擾。</p>
                </div>
              </div>
              <div className={styles.timelineArrow}>→</div>
              <div className={styles.timelineStep}>
                <div className={styles.tIconWrapper}><div className={styles.tIcon}>📋</div></div>
                <div className={styles.tContent}>
                  <div className={styles.tStep}>Step 2</div>
                  <h4 className={styles.tTitle}>貼入 Skill Pack</h4>
                  <p className={styles.tDesc}>將提供的 Prompt 複製到 AI 對話中。</p>
                </div>
              </div>
              <div className={styles.timelineArrow}>→</div>
              <div className={styles.timelineStep}>
                <div className={styles.tIconWrapper}><div className={styles.tIcon}>🤖</div></div>
                <div className={styles.tContent}>
                  <div className={styles.tStep}>Step 3</div>
                  <h4 className={styles.tTitle}>AI 協助提問與分析</h4>
                  <p className={styles.tDesc}>AI 會連續關鍵提問，幫助釐清盲點與原因。</p>
                </div>
              </div>
              <div className={styles.timelineArrow}>→</div>
              <div className={styles.timelineStep}>
                <div className={styles.tIconWrapper}><div className={styles.tIcon}>🎯</div></div>
                <div className={styles.tContent}>
                  <div className={styles.tStep}>Step 4</div>
                  <h4 className={styles.tTitle}>產出清晰定義與方向</h4>
                  <p className={styles.tDesc}>得到可執行的下一步建議。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Preview */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Prompt 與輸出預覽</h2>
            <div className={styles.previewContainer}>
              <div className={styles.previewLeft}>
                <div className={styles.previewHeader}>Prompt Preview <span className={styles.previewNote}>(部分節錄)</span> <span className={styles.previewTag}>Master Prompt</span></div>
                <div className={styles.previewBody}>
                  <p>[ 角色設定 ]<br/>你是一位專業的商業顧問，擅長協助使用者釐清問題、找出關鍵盲點與下一步行動。</p>
                  <p>[ 任務目標 ]<br/>透過有系統的提問與分析，協助使用者釐清他真正要解決的問題，並產出可執行的建議。</p>
                  <p>[ 追問流程 ]<br/>1. 先理解情境<br/>2. 釐清目標<br/>3. 找出關鍵假設與盲點<br/>4. 聚焦核心問題<br/>5. 提出下一步行動建議</p>
                  <p>請先從「理解情境」開始，詢問我目前的狀況。</p>
                </div>
                <div className={styles.previewFooter}>
                  <button className={styles.btnCopy}>📄 複製完整 Prompt</button>
                </div>
              </div>
              
              <div className={styles.previewRight}>
                 <div className={styles.previewHeader}>AI Output Preview <span className={styles.previewNote}>(範例)</span></div>
                 <div className={styles.outputList}>
                   <div className={styles.outputItem}>
                     <div className={styles.oIcon}>🎯</div>
                     <div>
                       <h4>問題摘要</h4>
                       <p>你的核心問題是：不確定為什麼生意沒有成長，且找不到主要原因。</p>
                     </div>
                   </div>
                   <div className={styles.outputItem}>
                     <div className={styles.oIcon}>💡</div>
                     <div>
                       <h4>關鍵盲點</h4>
                       <ol>
                         <li>缺乏明確的成長指標與追蹤機制</li>
                         <li>目前的客群是否夠精準？</li>
                         <li>客戶留存與轉化是否過低？</li>
                       </ol>
                     </div>
                   </div>
                   <div className={styles.outputItem}>
                     <div className={styles.oIcon}>📋</div>
                     <div>
                       <h4>需要補充的資訊</h4>
                       <ol>
                         <li>目前的主要產品或服務是什麼？</li>
                         <li>最近3個月的營收來源與數據？</li>
                         <li>你認為最大的瓶頸是什麼？</li>
                       </ol>
                     </div>
                   </div>
                   <div className={styles.outputItem}>
                     <div className={styles.oIcon}>🚀</div>
                     <div>
                       <h4>建議下一步</h4>
                       <ol>
                         <li>先建立關鍵指標 (營收、流量、轉換率)</li>
                         <li>深入了解現有客戶的需求與痛點</li>
                         <li>調整行銷訊息與產品定位，進行小規模測試</li>
                       </ol>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Sidebar */}
        <aside className={styles.stickySidebar}>
          <div className={styles.buyCard}>
            <div className={styles.buyBadge}>限時優惠</div>
            <div className={styles.buyHeader}>
               <div className={styles.buyIcon}>{pack.icon}</div>
               <div>
                 <h3 className={styles.buyTitle}>{pack.title}</h3>
                 <div className={styles.buyPrice}>${pack.price} <span className={styles.buyCurrency}>USD</span> <span className={styles.buyType}>單一價格</span></div>
               </div>
            </div>
            
            <ul className={styles.buyFeatures}>
              <li>✓ 包含 6 大模組內容</li>
              <li>✓ 可立即複製使用</li>
              <li>✓ 適用平台: ChatGPT / Claude / Gemini</li>
              <li>✓ 跨語言支援</li>
              <li>✓ 可與其他技能包交叉使用</li>
            </ul>

            {hasPurchased ? (
              <Link href={`/library/${pack.id}`} className={styles.btnPrimaryBlock} style={{ background: '#10b981' }}>
                已購買：前往我的圖書館
              </Link>
            ) : (
              <AddToCartButton pack={pack} className={styles.btnPrimaryBlock} />
            )}

            <div className={styles.upsellBox}>
              <Link href="/bundles" className={styles.btnOutlineBlock}>
                查看推薦組合方案<br/>
                <span className={styles.upsellSave}>任選 2 件即享自動折扣</span>
              </Link>
            </div>

            <div className={styles.guarantee}>
              一次付費永久使用｜安全付款｜隨買即用
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
