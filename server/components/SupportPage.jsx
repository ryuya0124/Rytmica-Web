/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

// メールアイコン
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

// 外部リンクアイコン
const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

// サポートページコンポーネント
export const SupportPage = () => (
  <section class="legal-page">
    <div class="container">
      <div class="legal-content">
        <h1 class="legal-title" data-i18n="support.title">サポート</h1>
        <p class="legal-updated" data-i18n="support.intro">Rytmicaに関するご質問やお問い合わせは、以下の方法でお願いします。</p>
        
        <div class="legal-section">
          <h2 data-i18n="support.emailTitle">メールでのお問い合わせ</h2>
          <div class="support-contact">
            <a href="mailto:support@ryuya-dev.net" class="support-email-link">
              <span class="support-icon"><MailIcon /></span>
              <span data-i18n="support.emailLabel">メールで問い合わせる</span>
            </a>
          </div>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="support.githubTitle">GitHubでの報告</h2>
          <p data-i18n="support.githubContent">バグ報告や機能リクエストは、GitHubのIssueページからお願いします。</p>
          <div class="support-contact">
            <a href="https://github.com/ryuya0124/musical_note_calculator/issues" class="support-email-link" target="_blank" rel="noopener noreferrer">
              <span class="support-icon"><ExternalLinkIcon /></span>
              <span data-i18n="support.githubLink">GitHubで Issue を作成する</span>
            </a>
          </div>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="support.faqTitle">よくある質問</h2>
          <ul>
            <li>
              <strong data-i18n="support.faq1Q">アプリは無料ですか？</strong>
              <span> - </span>
              <span data-i18n="support.faq1A">はい、Rytmicaは完全無料でご利用いただけます。広告も表示されません。</span>
            </li>
            <li>
              <strong data-i18n="support.faq2Q">どのプラットフォームで使えますか？</strong>
              <span> - </span>
              <span data-i18n="support.faq2A">iOS、iPadOS、macOS、Android、Windows、Linuxに対応しています。</span>
            </li>
            <li>
              <strong data-i18n="support.faq3Q">個人情報は収集されますか？</strong>
              <span> - </span>
              <span data-i18n="support.faq3A">いいえ、本アプリは一切の個人情報を収集しません。詳しくはプライバシーポリシーをご覧ください。</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)
