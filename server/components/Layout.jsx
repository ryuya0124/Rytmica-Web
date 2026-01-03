/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

// ヘッダーコンポーネント
export const Header = () => (
  <header class="header">
    <div class="header-content">
      <a href="/" class="header-logo">
        <img src="/icon.jpg" alt="Rytmica" />
        <span>Rytmica</span>
      </a>
      <nav class="header-nav" role="navigation" aria-label="メインナビゲーション">
        <a href="/">ホーム</a>
        <a href="https://github.com/ryuya0124/musical_note_calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/privacy">プライバシーポリシー</a>
        <a href="/terms">利用規約</a>
        <a href="/support">サポート</a>
      </nav>
    </div>
  </header>
)

// フッターコンポーネント
export const Footer = () => (
  <footer class="footer" role="contentinfo">

    <div class="footer-content">
      <nav class="footer-links" aria-label="フッターナビゲーション">
        <a href="/">ホーム</a>
        <a href="https://github.com/ryuya0124/musical_note_calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/privacy">プライバシーポリシー</a>
        <a href="/terms">利用規約</a>
        <a href="/support">サポート</a>
      </nav>
      <p class="footer-copy">© {new Date().getFullYear()} Rytmica. All rights reserved.</p>
    </div>
  </footer>
)
