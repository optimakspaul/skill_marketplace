import Link from 'next/link';
import { skillPacks } from '@/lib/seed';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

export default async function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const pack = skillPacks.find(p => p.id === resolvedParams.id) || skillPacks[0];

  if (!pack) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumbContainer}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">首頁</Link> / <Link href="/skill-packs">技能包</Link> / <Link href={`/skill-packs/${pack.id}`}>{pack.title}</Link> / <span>購買</span>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className={styles.pageTitle}>立即購買：{pack.title}</h1>
        <p className={styles.pageSubtitle}>完成購買後即可立即取得 Prompt、模板、案例與使用教學。</p>

        <div className={styles.checkoutLayout}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            
            {/* A. 訂單內容 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>A. 訂單內容</h2>
              <div className={styles.orderSummaryCard}>
                <div className={styles.orderIcon}>{pack.icon}</div>
                <div className={styles.orderInfo}>
                  <h3 className={styles.orderTitle}>{pack.title}</h3>
                  <p className={styles.orderDesc}>把模糊問題變清楚，讓 AI 幫你問對問題、聚焦關鍵、找到下一步。</p>
                  <div className={styles.orderTags}>
                    <span>🌐 跨語言</span>
                    <span>🤖 適用 ChatGPT / Claude / Gemini</span>
                    <span>🔀 可交叉組合</span>
                  </div>
                </div>
                <div className={styles.orderPrice}>
                  <div className={styles.priceAmount}>${pack.price}</div>
                  <div className={styles.priceCurrency}>USD</div>
                </div>
              </div>
              <div className={styles.orderQuantityRow}>
                <div className={styles.qtyBox}>數量 <button>-</button> 1 <button>+</button></div>
                <div className={styles.digitalNote}>⚡️ 數位商品，付款後立即開通</div>
              </div>
            </section>

            {/* B. 你將獲得 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>B. 你將獲得</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.bItem}>📋<br/>Master Prompt</div>
                <div className={styles.bItem}>👤<br/>AI 角色設定</div>
                <div className={styles.bItem}>📝<br/>輸入表單</div>
                <div className={styles.bItem}>📄<br/>輸出模板</div>
                <div className={styles.bItem}>💡<br/>實戰案例</div>
                <div className={styles.bItem}>📖<br/>使用教學</div>
              </div>
              <p className={styles.benefitsNote}>ⓘ 可直接複製到 ChatGPT / Claude / Gemini 使用。</p>
            </section>

            {/* C. 付款資訊 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>C. 付款資訊</h2>
              <form className={styles.paymentForm}>
                <div className={styles.formRow}>
                  <label>電子郵件</label>
                  <input type="email" placeholder="請輸入電子郵件" />
                </div>
                <div className={styles.formRow}>
                  <label>姓名</label>
                  <input type="text" placeholder="請輸入姓名" />
                </div>
                <div className={styles.formRow}>
                  <label>國家 / 地區</label>
                  <select>
                    <option>台灣 (Taiwan)</option>
                    <option>香港 (Hong Kong)</option>
                    <option>馬來西亞 (Malaysia)</option>
                    <option>新加坡 (Singapore)</option>
                  </select>
                </div>
                
                <div className={styles.stripeWrapper}>
                  <div className={styles.formRow}>
                    <label>信用卡號碼</label>
                    <div className={styles.stripeInputMock}>
                      <span>1234 1234 1234 1234</span>
                      <span className={styles.cardIcon}>💳</span>
                    </div>
                  </div>
                  <div className={styles.formRowSplit}>
                    <div>
                      <label>到期日</label>
                      <input type="text" placeholder="MM / YY" />
                    </div>
                    <div>
                      <label>CVC</label>
                      <input type="text" placeholder="123" />
                    </div>
                  </div>
                </div>

                <div className={styles.formRowSplit}>
                  <input type="text" placeholder="輸入折扣碼" className={styles.discountInput} />
                  <button type="button" className={styles.btnApply}>套用</button>
                </div>

                <div className={styles.checkboxRow}>
                  <input type="checkbox" id="terms" defaultChecked />
                  <label htmlFor="terms">我同意 <a>服務條款</a> 與 <a>退款政策</a></label>
                </div>

                <button type="button" className={styles.btnPayLarge}>立即付款 ${pack.price}</button>
                <div className={styles.secureNote}>🔒 安全付款 / 數位商品即時交付</div>
              </form>
            </section>

            {/* Guarantees */}
            <div className={styles.guaranteeGrid}>
              <div className={styles.gItem}>
                <div className={styles.gIcon}>🛡️</div>
                <h4>30 天安心保證</h4>
                <p>不滿意可申請退款</p>
              </div>
              <div className={styles.gItem}>
                <div className={styles.gIcon}>🌐</div>
                <h4>跨語言使用</h4>
                <p>支援多語言，全球適用</p>
              </div>
              <div className={styles.gItem}>
                <div className={styles.gIcon}>👤</div>
                <h4>新手也能快上手</h4>
                <p>教學完整，立即可用</p>
              </div>
              <div className={styles.gItem}>
                <div className={styles.gIcon}>↗️</div>
                <h4>可升級至 Bundle</h4>
                <p>未來可折抵升級</p>
              </div>
            </div>

            {/* Purchase Flow */}
            <section className={styles.flowSection}>
              <h3 className={styles.flowTitle}>購買後流程</h3>
              <div className={styles.flowSteps}>
                <div className={styles.flowStep}>
                  <div className={styles.fNum}>1</div>
                  <div className={styles.fIcon}>✓</div>
                  <div>
                    <h5>完成付款</h5>
                    <p>付款完成後，系統會立即處理你的訂單。</p>
                  </div>
                </div>
                <div className={styles.flowArrow}>→</div>
                <div className={styles.flowStep}>
                  <div className={styles.fNum}>2</div>
                  <div className={styles.fIcon}>✉️</div>
                  <div>
                    <h5>收到下載 / 開通信件</h5>
                    <p>你將收到包含下載連結與開通說明的電子郵件。</p>
                  </div>
                </div>
                <div className={styles.flowArrow}>→</div>
                <div className={styles.flowStep}>
                  <div className={styles.fNum}>3</div>
                  <div className={styles.fIcon}>📋</div>
                  <div>
                    <h5>貼進 AI 平台</h5>
                    <p>將 Prompt 或模板貼進 ChatGPT / Claude / Gemini。</p>
                  </div>
                </div>
                <div className={styles.flowArrow}>→</div>
                <div className={styles.flowStep}>
                  <div className={styles.fNum}>4</div>
                  <div className={styles.fIcon}>📈</div>
                  <div>
                    <h5>開始分析與行動</h5>
                    <p>立即可得分析結果，推動下一步行動。</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column (Sticky) */}
          <div className={styles.rightCol}>
            {/* Order Summary Sticky */}
            <div className={styles.stickySummaryBox}>
              <h3 className={styles.summaryTitle}>訂單摘要</h3>
              <div className={styles.summaryRow}>
                <span>{pack.title}</span>
                <span>${pack.price}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>小計</span>
                <span>${pack.price}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>折扣</span>
                <span className={styles.textGreen}>-$0</span>
              </div>
              <div className={styles.summaryTotalRow}>
                <span>總計</span>
                <span className={styles.totalPrice}>${pack.price} <span className={styles.usdText}>USD</span></span>
              </div>
              <button className={styles.btnPaySmall}>立即付款</button>
              <div className={styles.secureNoteSmall}>🔒 安全付款 / 數位商品即時交付</div>
            </div>

            {/* Upsell */}
            <div className={styles.upsellSection}>
              <h3 className={styles.upsellTitle}>想要更完整？</h3>
              <p className={styles.upsellSubtitle}>升級方案幫助你在更多情境中發揮 AI 價值。</p>
              
              <div className={styles.upsellCard}>
                <div className={styles.upsellBadge}>最受歡迎</div>
                <div className={styles.uHeader}>
                   <div className={styles.uIcon}>📦</div>
                   <div>
                     <h4>升級至 5-Pack Bundle</h4>
                     <div className={styles.uPrice}>$39 <span className={styles.uStrike}>原價 $49</span></div>
                   </div>
                </div>
                <ul className={styles.uFeatures}>
                  <li>✓ 包含 5 個熱門 Skill Pack</li>
                  <li>✓ 比單買省 20%</li>
                  <li>✓ 可交叉組合使用</li>
                </ul>
                <button className={styles.btnOutlineBlock}>升級方案</button>
              </div>

              <div className={styles.upsellCard}>
                <div className={styles.uHeader}>
                   <div className={styles.uIcon}>✨</div>
                   <div>
                     <h4>升級至 Thinking OS / Expert Bundle</h4>
                     <div className={styles.uPrice}>$49 <span className={styles.uStrike}>原價 $69</span></div>
                   </div>
                </div>
                <ul className={styles.uFeatures}>
                  <li>✓ 完整思維框架與方法論</li>
                  <li>✓ 專家級 Prompt 與工具包</li>
                  <li>✓ 進階案例與教學</li>
                </ul>
                <button className={styles.btnOutlineBlock}>升級方案</button>
              </div>
            </div>

            {/* Testimonials */}
            <div className={styles.testimonialSection}>
              <h3 className={styles.testimonialTitle}>來自用戶的真實回饋</h3>
              
              <div className={styles.tCard}>
                <div className={styles.tAvatar}>J</div>
                <div>
                  <p className={styles.tQuote}>"不只是會讀，而是會用。"</p>
                  <p className={styles.tAuthor}>Justin | 產品經理</p>
                  <p className={styles.tText}>技能包把知識變成可執行的提示詞與流程，效果超出預期。</p>
                </div>
              </div>
              
              <div className={styles.tCard}>
                <div className={styles.tAvatar}>S</div>
                <div>
                  <p className={styles.tQuote}>"把 AI 變成低成本顧問。"</p>
                  <p className={styles.tAuthor}>Sandy | 創辦者</p>
                  <p className={styles.tText}>幫助我盤點規劃與決策，省下大量時間。</p>
                </div>
              </div>
              
              <div className={styles.tCard}>
                <div className={styles.tAvatar}>E</div>
                <div>
                  <p className={styles.tQuote}>"用自己的語言思考與輸出。"</p>
                  <p className={styles.tAuthor}>Evan | 自由接案者</p>
                  <p className={styles.tText}>模板很實用，貼上就能直接用。</p>
                </div>
              </div>
              
              <Link href="#" className={styles.viewMoreReviews}>查看更多評價 →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
