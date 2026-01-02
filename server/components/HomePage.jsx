/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

// ホームページコンポーネント
export const HomePage = () => (
  <>
    <section class="hero">
      <div class="container">
        <img src="/icon.jpg" alt="Music Note Calculator" class="hero-icon" />
        <h1 class="hero-title">Music Note Calculator</h1>
        <p class="hero-subtitle">
          音ゲーマーのための便利ツール。<br />
          BPMと音符の計算、餡蜜の判定確認をサポートします。
        </p>
        <div class="hero-badges">
          <span class="badge"><span class="badge-icon">💰</span>完全無料</span>
          <span class="badge"><span class="badge-icon">🚫</span>広告なし</span>
          <span class="badge"><span class="badge-icon">🔓</span>オープンソース</span>
        </div>
        <div class="download-buttons">
          <a href="https://github.com/ryuya0124/musical_note_calculator/releases" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <span class="btn-icon">📥</span>ダウンロード
          </a>
          <a href="https://github.com/ryuya0124/musical_note_calculator" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <span class="btn-icon">⭐</span>GitHub
          </a>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2 class="section-title">主な機能</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎵</div>
            <h3 class="feature-title">音符計算</h3>
            <p class="feature-description">各音符（4分・8分・16分・付点など）の長さをミリ秒で表示します。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3 class="feature-title">餡蜜チェッカー</h3>
            <p class="feature-description">同時押ししてもPERFECTが出るか確認できます。多数のゲーム別プリセット搭載。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3 class="feature-title">音符換算</h3>
            <p class="feature-description">異なるBPM間で音符を変換します。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔢</div>
            <h3 class="feature-title">音符回数計算</h3>
            <p class="feature-description">指定した時間内で各音符が何回発生するかを計算します。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🥁</div>
            <h3 class="feature-title">メトロノーム</h3>
            <p class="feature-description">高精度メトロノーム搭載。リズム練習に最適です。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚙️</div>
            <h3 class="feature-title">カスタマイズ</h3>
            <p class="feature-description">カスタム音符の追加、表示する音符の選択、ダークモード対応。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="platforms">
      <div class="container">
        <h2 class="section-title">対応プラットフォーム</h2>
        <div class="platforms-grid">
          <div class="platform-card">
            <div class="platform-icon">🍎</div>
            <div class="platform-name">iOS / iPadOS</div>
            <div class="platform-status">App Store / TestFlight</div>
          </div>
          <div class="platform-card">
            <div class="platform-icon">🖥️</div>
            <div class="platform-name">macOS</div>
            <div class="platform-status">Mac App Store</div>
          </div>
          <div class="platform-card">
            <div class="platform-icon">🤖</div>
            <div class="platform-name">Android</div>
            <div class="platform-status">F-Droid</div>
          </div>
          <div class="platform-card">
            <div class="platform-icon">🪟</div>
            <div class="platform-name">Windows</div>
            <div class="platform-status available">GitHub Releases</div>
          </div>
          <div class="platform-card">
            <div class="platform-icon">🐧</div>
            <div class="platform-name">Linux</div>
            <div class="platform-status available">GitHub Releases</div>
          </div>
        </div>
      </div>
    </section>
  </>
)
