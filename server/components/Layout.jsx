/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

// ヘッダーコンポーネント
export const Header = () => (
  <header class="header">
    <div class="header-content">
      <a href="/" class="header-logo">
        <img src="/icon.jpg" alt="Music Note Calculator" />
        <span>Music Note Calculator</span>
      </a>
      <nav class="header-nav">
        <a href="/">ホーム</a>
        <a href="https://github.com/ryuya0124/musical_note_calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/privacy">プライバシーポリシー</a>
        <a href="/terms">利用規約</a>
      </nav>
    </div>
  </header>
)

// フッターコンポーネント
export const Footer = () => (
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <a href="/">ホーム</a>
        <a href="https://github.com/ryuya0124/musical_note_calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/privacy">プライバシーポリシー</a>
        <a href="/terms">利用規約</a>
      </div>
      <p class="footer-copy">© {new Date().getFullYear()} Music Note Calculator. All rights reserved.</p>
    </div>
  </footer>
)
