/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Hono } from 'hono'
import { Header, Footer } from './components/Layout.jsx'
import { HomePage } from './components/HomePage.jsx'
import { PrivacyPage } from './components/PrivacyPage.jsx'
import { TermsPage } from './components/TermsPage.jsx'

const app = new Hono()

// 構造化データ
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Music Note Calculator",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "iOS, iPadOS, macOS, Android, Windows, Linux",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
  "description": "音ゲーマーのための便利ツール。BPMと音符の計算、餡蜜の判定確認をサポート。",
  "url": "https://mnc.ryuya-dev.net",
  "downloadUrl": "https://github.com/ryuya0124/musical_note_calculator/releases",
  "author": { "@type": "Person", "name": "ryuya0124", "url": "https://github.com/ryuya0124" }
}

// HTMLテンプレート
const BaseLayout = ({ title, description, canonicalPath, children, extraHead }) => (
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/jpeg" href="/icon.jpg" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://mnc.ryuya-dev.net${canonicalPath}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://mnc.ryuya-dev.net${canonicalPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://mnc.ryuya-dev.net/icon.jpg" />
      <meta property="og:site_name" content="Music Note Calculator" />
      <meta property="og:locale" content="ja_JP" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://mnc.ryuya-dev.net/icon.jpg" />
      
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* CSS */}
      <link rel="stylesheet" href="/styles.css" />
      
      {extraHead}
    </head>
    <body>
      <Header />
      <main class="main">
        {children}
      </main>
      <Footer />
    </body>
  </html>
)

// ホームページ
app.get('/', (c) => {
  return c.html(
    <BaseLayout
      title="Music Note Calculator - 音ゲーマーのための便利ツール"
      description="BPMと音符の計算、餡蜜の判定確認をサポートする音ゲーマー向け便利ツール。完全無料・広告なし・オープンソース。"
      canonicalPath="/"
      extraHead={
        <>
          <meta name="keywords" content="音ゲー,BPM,音符計算,餡蜜,メトロノーム,リズムゲーム" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </>
      }
    >
      <HomePage />
    </BaseLayout>
  )
})

// プライバシーポリシー
app.get('/privacy', (c) => {
  return c.html(
    <BaseLayout
      title="プライバシーポリシー | Music Note Calculator"
      description="Music Note Calculatorのプライバシーポリシー。本アプリは個人情報を収集しません。"
      canonicalPath="/privacy"
      extraHead={<meta name="robots" content="noindex" />}
    >
      <PrivacyPage />
    </BaseLayout>
  )
})

// 利用規約
app.get('/terms', (c) => {
  return c.html(
    <BaseLayout
      title="利用規約 | Music Note Calculator"
      description="Music Note Calculatorの利用規約。MITライセンスで提供されるオープンソースソフトウェアです。"
      canonicalPath="/terms"
      extraHead={<meta name="robots" content="noindex" />}
    >
      <TermsPage />
    </BaseLayout>
  )
})

export default app
