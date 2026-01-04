/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Hono } from 'hono'
import { Header, Footer } from './components/Layout.jsx'
import { HomePage } from './components/HomePage.jsx'
import { PrivacyPage } from './components/PrivacyPage.jsx'
import { TermsPage } from './components/TermsPage.jsx'
import { SupportPage } from './components/SupportPage.jsx'

const app = new Hono()

// 構造化データ（SEO強化版 - @graph形式）
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Rytmica",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "iOS, iPadOS, macOS, Android, Windows, Linux",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
      "description": "音ゲーマーのための便利ツール。BPMと音符の計算、餡蜜の判定確認をサポート。",
      "url": "https://rytmica.ryuya-dev.net",
      "downloadUrl": "https://github.com/ryuya0124/musical_note_calculator/releases",
      "author": { "@type": "Person", "name": "ryuya0124", "url": "https://github.com/ryuya0124" },
      "screenshot": "https://rytmica.ryuya-dev.net/icon.jpg",
      "softwareVersion": "1.0.0",
      "license": "https://opensource.org/licenses/MIT"
    },
    {
      "@type": "WebSite",
      "name": "Rytmica",
      "url": "https://rytmica.ryuya-dev.net",
      "description": "音ゲーマーのための便利ツール",
      "inLanguage": "ja"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Rytmicaは無料ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、Rytmicaは完全無料でご利用いただけます。広告も表示されません。"
          }
        },
        {
          "@type": "Question",
          "name": "どのプラットフォームで使えますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "iOS、iPadOS、macOS、Android、Windows、Linuxの全プラットフォームに対応しています。"
          }
        },
        {
          "@type": "Question",
          "name": "餡蜜チェッカーとは何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "餡蜜チェッカーは、同時押ししてもPERFECT判定が出るかどうかを確認できる機能です。多数のゲーム別プリセットが搭載されています。"
          }
        }
      ]
    }
  ]
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
      <link rel="canonical" href={`https://rytmica.ryuya-dev.net${canonicalPath}`} />
      
      {/* 追加SEOメタタグ */}
      <meta name="author" content="ryuya0124" />
      <meta name="theme-color" content="#667eea" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="google" content="notranslate" />
      
      {/* Apple Web App */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Rytmica" />
      <link rel="apple-touch-icon" href="/icon.jpg" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://rytmica.ryuya-dev.net${canonicalPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://rytmica.ryuya-dev.net/icon.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Rytmica" />
      <meta property="og:locale" content="ja_JP" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://rytmica.ryuya-dev.net/icon.jpg" />
      
      {/* パフォーマンス最適化 */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
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
      
      {/* i18n スクリプト */}
      <script src="/translations.js"></script>
      <script src="/i18n.js"></script>
    </body>
  </html>
)

// ホームページ
app.get('/', (c) => {
  return c.html(
    <BaseLayout
      title="Rytmica - 音ゲーマーのための便利ツール"
      description="BPMと音符の計算、餡蜜の判定確認をサポートする音ゲーマー向け便利ツール。完全無料・広告なし・オープンソース。"
      canonicalPath="/"
      extraHead={
        <>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
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
      title="プライバシーポリシー | Rytmica"
      description="Rytmicaのプライバシーポリシー。本アプリは個人情報を収集しません。"
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
      title="利用規約 | Rytmica"
      description="Rytmicaの利用規約。MITライセンスで提供されるオープンソースソフトウェアです。"
      canonicalPath="/terms"
      extraHead={<meta name="robots" content="noindex" />}
    >
      <TermsPage />
    </BaseLayout>
  )
})

// サポート
app.get('/support', (c) => {
  return c.html(
    <BaseLayout
      title="サポート | Rytmica"
      description="Rytmicaのサポートページ。お問い合わせ・よくある質問はこちら。"
      canonicalPath="/support"
      extraHead={<meta name="robots" content="noindex" />}
    >
      <SupportPage />
    </BaseLayout>
  )
})

export default app
