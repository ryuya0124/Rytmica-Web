/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

// メールアイコン
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

// サポートページコンポーネント
export const SupportPage = () => (
  <section class="legal-page">
    <div class="container">
      <div class="legal-content">
        <h1 class="legal-title">サポート</h1>
        <p class="legal-updated">お困りのことがあればお気軽にお問い合わせください</p>
        
        <div class="legal-section">
          <h2>お問い合わせ</h2>
          <p>
            Rytmicaに関するご質問、ご要望、バグ報告などがありましたら、以下のメールアドレスまでお問い合わせください。
          </p>
          <div class="support-contact">
            <a href="mailto:support@ryuya.dev.net" class="support-email-link">
              <span class="support-icon"><MailIcon /></span>
              support@ryuya.dev.net
            </a>
          </div>
        </div>
        
        <div class="legal-section">
          <h2>GitHubでのフィードバック</h2>
          <p>
            技術的な問題や機能リクエストは、GitHubのIssuesでも受け付けています。
          </p>
          <ul>
            <li><a href="https://github.com/ryuya0124/musical_note_calculator/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
          </ul>
        </div>
        
        <div class="legal-section">
          <h2>よくある質問</h2>
          <ul>
            <li><strong>アプリは無料ですか？</strong> - はい、完全無料でご利用いただけます。広告も一切ありません。</li>
            <li><strong>どのプラットフォームに対応していますか？</strong> - iOS、iPadOS、macOS、Android、Windows、Linuxに対応しています。</li>
            <li><strong>オフラインで使用できますか？</strong> - はい、すべての機能がオフラインで利用可能です。</li>
          </ul>
        </div>
        
        <div class="legal-section">
          <h2>回答について</h2>
          <p>
            お問い合わせへの返信には数日かかる場合があります。ご了承ください。
          </p>
        </div>
      </div>
    </div>
  </section>
)
