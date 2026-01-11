/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

// SVGアイコン定義
const Icons = {
  // バッジアイコン
  free: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
      <path d="M12 18V6"/>
    </svg>
  ),
  noAds: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="m4.9 4.9 14.2 14.2"/>
    </svg>
  ),
  openSource: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      <path d="M12 2v2"/>
      <path d="M12 22v-2"/>
      <path d="m17 20.66-1-1.73"/>
      <path d="M11 10.27 7 3.34"/>
      <path d="m20.66 17-1.73-1"/>
      <path d="m3.34 7 1.73 1"/>
      <path d="M14 12h8"/>
      <path d="M2 12h2"/>
      <path d="m20.66 7-1.73 1"/>
      <path d="m3.34 17 1.73-1"/>
      <path d="m17 3.34-1 1.73"/>
      <path d="m7 20.66 1-1.73"/>
    </svg>
  ),
  // ボタンアイコン
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7,10 12,15 17,10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  // 機能アイコン
  musicNote: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
      <path d="M16 16h5v5"/>
    </svg>
  ),
  calculator: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <line x1="8" y1="6" x2="16" y2="6"/>
      <line x1="8" y1="10" x2="8" y2="10"/>
      <line x1="12" y1="10" x2="12" y2="10"/>
      <line x1="16" y1="10" x2="16" y2="10"/>
      <line x1="8" y1="14" x2="8" y2="14"/>
      <line x1="12" y1="14" x2="12" y2="14"/>
      <line x1="16" y1="14" x2="16" y2="14"/>
      <line x1="8" y1="18" x2="8" y2="18"/>
      <line x1="12" y1="18" x2="16" y2="18"/>
    </svg>
  ),
  drum: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m2 2 8 8"/>
      <path d="m22 2-8 8"/>
      <ellipse cx="12" cy="9" rx="10" ry="5"/>
      <path d="M2 9v8a10 5 0 0 0 20 0V9"/>
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  // プラットフォームアイコン
  apple: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5765-6.1185-9.4396"/>
    </svg>
  ),
  windows: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.574-.63.328-1.748.74-2.457 1.57-.618.689-1.277 1.073-1.906 1.066-.615-.006-1.135-.334-1.446-.928l-.003-.006c-.042-.103-.09-.156-.144-.267-.346-.023-.678-.066-.964-.228v.002c-.96-.467-2.285-.468-3.05-.54-.643-.064-1.104-.3-1.299-.67-.195-.37-.105-.846.213-1.473.16-.303.343-.64.465-1.004.047-.134.067-.2.074-.266.013-.09.014-.18.004-.268l.002-.009v-.004c.024-.32.132-.638.274-.93.71-.368 1.633-.839 2.065-1.07.054.029.108.065.166.065.222.133.48.066.595-.132zm1.973 2.134c-.022.066-.043.2-.043.2s-.037-.2-.07-.266c-.006-.012-.016-.036-.026-.06.007.018.012.037.015.058.006.027.01.063.012.101zm.028-.067c-.006-.027-.023-.066-.026-.066.002 0 .026.066.026.066z"/>
    </svg>
  ),
  // 外部リンクアイコン
  externalLink: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15,3 21,3 21,9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  // TestFlightアイコン (飛行機)
  testflight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
    </svg>
  ),
  // App Storeアイコン
  appStore: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/>
    </svg>
  ),
  // F-Droidアイコン
  fdroid: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.472 10.081l-.001-.001-7.657-7.657a.95.95 0 00-1.345 0L3.812 10.08l-.029.029a3.199 3.199 0 000 4.516l.029.029 7.657 7.657a.95.95 0 001.345 0l7.656-7.656.001-.001a3.204 3.204 0 00.001-4.573zm-1.346 3.227l-6.984 6.984-6.984-6.984a1.276 1.276 0 010-1.801l.004-.003 6.98-6.981 6.984 6.984a1.279 1.279 0 010 1.801z"/>
      <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5.5a2 2 0 110-4 2 2 0 010 4z"/>
    </svg>
  )
}

// ホームページコンポーネント
export const HomePage = () => (
  <>
    <section class="hero" role="banner" aria-label="アプリ紹介">
      <div class="container">
        <img src="/icon.jpg" alt="Rytmica - 音ゲーマー向け計算ツール" class="hero-icon" />
        <h1 class="hero-title">Rytmica</h1>
        <p class="hero-subtitle" data-i18n="hero.subtitle">
          音ゲーマーのための便利ツール。<br />
          BPMと音符の計算、餡蜜の判定確認をサポートします。
        </p>
        <div class="hero-badges">
          <span class="badge">
            <span class="badge-icon">{Icons.noAds}</span><span data-i18n="hero.noAds">広告なし</span>
          </span>
          <span class="badge">
            <span class="badge-icon">{Icons.openSource}</span><span data-i18n="hero.openSource">オープンソース</span>
          </span>
        </div>
        <div class="download-buttons">
          <a href="https://github.com/ryuya0124/musical_note_calculator/releases" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <span class="btn-icon">{Icons.download}</span><span data-i18n="hero.download">ダウンロード</span>
          </a>
          <a href="https://github.com/ryuya0124/musical_note_calculator" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <span class="btn-icon">{Icons.github}</span><span data-i18n="nav.github">GitHub</span>
          </a>
        </div>
      </div>
    </section>

    <section class="features" role="region" aria-labelledby="features-title">
      <div class="container">
        <h2 id="features-title" class="section-title" data-i18n="features.title">主な機能</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">{Icons.musicNote}</div>
            <h3 class="feature-title" data-i18n="features.noteCalc">音符計算</h3>
            <p class="feature-description" data-i18n="features.noteCalcDesc">各音符（4分・8分・16分・付点など）の長さをミリ秒で表示します。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">{Icons.target}</div>
            <h3 class="feature-title" data-i18n="features.anmitsu">餡蜜チェッカー</h3>
            <p class="feature-description" data-i18n="features.anmitsuDesc">同時押ししてもPERFECTが出るか確認できます。多数のゲーム別プリセット搭載。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">{Icons.refresh}</div>
            <h3 class="feature-title" data-i18n="features.noteConvert">音符換算</h3>
            <p class="feature-description" data-i18n="features.noteConvertDesc">異なるBPM間で音符を変換します。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">{Icons.calculator}</div>
            <h3 class="feature-title" data-i18n="features.noteCount">音符回数計算</h3>
            <p class="feature-description" data-i18n="features.noteCountDesc">指定した時間内で各音符が何回発生するかを計算します。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">{Icons.drum}</div>
            <h3 class="feature-title" data-i18n="features.metronome">メトロノーム</h3>
            <p class="feature-description" data-i18n="features.metronomeDesc">高精度メトロノーム搭載。リズム練習に最適です。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">{Icons.settings}</div>
            <h3 class="feature-title" data-i18n="features.customize">カスタマイズ</h3>
            <p class="feature-description" data-i18n="features.customizeDesc">カスタム音符の追加、表示する音符の選択、ダークモード対応。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="platforms" role="region" aria-labelledby="platforms-title">
      <div class="container">
        <h2 id="platforms-title" class="section-title" data-i18n="platforms.title">対応プラットフォーム</h2>
        <div class="platforms-grid">
          <div class="platform-card">
            <div class="platform-icon">{Icons.apple}</div>
            <div class="platform-name">iOS / iPadOS</div>
            <div class="platform-links">
              <a href="https://testflight.apple.com/join/6zXJy9qq" class="platform-link available" target="_blank" rel="noopener noreferrer">
                <span class="platform-link-icon">{Icons.testflight}</span><span data-i18n="platforms.testflight">TestFlight</span>
              </a>
              <a href="https://apps.apple.com/jp/app/rytmica/id6757244924" class="platform-link available" target="_blank" rel="noopener noreferrer">
                <span class="platform-link-icon">{Icons.appStore}</span><span data-i18n="platforms.appStore">App Store</span>
              </a>
            </div>
          </div>
          <div class="platform-card">
            <div class="platform-icon">{Icons.monitor}</div>
            <div class="platform-name">macOS</div>
            <div class="platform-links">
              <a href="https://testflight.apple.com/join/6zXJy9qq" class="platform-link available" target="_blank" rel="noopener noreferrer">
                <span class="platform-link-icon">{Icons.testflight}</span>TestFlight
              </a>
              <a href="https://apps.apple.com/jp/app/rytmica/id6757244924" class="platform-link available" target="_blank" rel="noopener noreferrer">
                <span class="platform-link-icon">{Icons.appStore}</span><span data-i18n="platforms.appStore">App Store</span>
              </a>
            </div>
          </div>
          <div class="platform-card">
            <div class="platform-icon">{Icons.android}</div>
            <div class="platform-name">Android</div>
            <div class="platform-links">
              <span class="platform-link coming-soon">
                <span class="platform-link-icon">{Icons.fdroid}</span>F-Droid (Coming Soon)
              </span>
              <a href="https://github.com/ryuya0124/musical_note_calculator/releases" class="platform-link" target="_blank" rel="noopener noreferrer">
                <span class="platform-link-icon">{Icons.github}</span><span data-i18n="platforms.githubReleases">GitHub Releases</span>
              </a>
            </div>
          </div>
          <div class="platform-card">
            <div class="platform-icon">{Icons.windows}</div>
            <div class="platform-name">Windows</div>
            <div class="platform-links">
              <span class="platform-link coming-soon">
                <span class="platform-link-icon">{Icons.windows}</span><span data-i18n="platforms.microsoftStore">Microsoft Store (Coming Soon)</span>
              </span>
              <a href="https://github.com/ryuya0124/musical_note_calculator/releases" class="platform-link available" target="_blank" rel="noopener noreferrer">
                <span class="platform-link-icon">{Icons.github}</span>GitHub Releases
              </a>
            </div>
          </div>
          <div class="platform-card">
            <div class="platform-icon">{Icons.linux}</div>
            <div class="platform-name">Linux</div>
            <div class="platform-links">
              <a href="https://github.com/ryuya0124/musical_note_calculator/releases" class="platform-link available" target="_blank" rel="noopener noreferrer">
                <span class="platform-link-icon">{Icons.github}</span>GitHub Releases
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
