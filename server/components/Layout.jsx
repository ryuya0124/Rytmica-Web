/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

// 地球アイコン（言語切り替え用）
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

// ヘッダーコンポーネント
export const Header = () => (
  <header class="header">
    <div class="header-content">
      <a href="/" class="header-logo">
        <img src="/icon.jpg" alt="Rytmica" />
        <span>Rytmica</span>
      </a>
      <nav class="header-nav" role="navigation" aria-label="メインナビゲーション">
        <a href="/" data-i18n="nav.home">ホーム</a>
        <a href="https://github.com/ryuya0124/musical_note_calculator" target="_blank" rel="noopener noreferrer" data-i18n="nav.github">GitHub</a>
        <a href="/privacy" data-i18n="nav.privacy">プライバシーポリシー</a>
        <a href="/terms" data-i18n="nav.terms">利用規約</a>
        <a href="/support" data-i18n="nav.support">サポート</a>
      </nav>
      <button class="lang-toggle" id="lang-toggle" aria-label="言語切替" data-i18n-aria="nav.langToggle">
        <span class="lang-toggle-icon"><GlobeIcon /></span>
        <span class="lang-toggle-text" id="lang-toggle-text">EN</span>
      </button>
    </div>
  </header>
)

// フッターコンポーネント
export const Footer = () => (
  <footer class="footer" role="contentinfo">

    <div class="footer-content">
      <nav class="footer-links" aria-label="フッターナビゲーション">
        <a href="/" data-i18n="nav.home">ホーム</a>
        <a href="https://github.com/ryuya0124/musical_note_calculator" target="_blank" rel="noopener noreferrer" data-i18n="nav.github">GitHub</a>
        <a href="/privacy" data-i18n="nav.privacy">プライバシーポリシー</a>
        <a href="/terms" data-i18n="nav.terms">利用規約</a>
        <a href="/support" data-i18n="nav.support">サポート</a>
      </nav>
      <p class="footer-copy" data-i18n="footer.copyright">© {new Date().getFullYear()} Rytmica. All rights reserved.</p>
    </div>
  </footer>
)

