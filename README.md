# Rytmica Web

Rytmica アプリのランディングページ。

## 🌐 URL

- **本番**: https://mnc.ryuya-dev.net
- **Workers URL**: https://musical-note-calculator-web.ryuya1adgjmptw.workers.dev

## 🛠️ 技術スタック

- **ランタイム**: Cloudflare Workers
- **フレームワーク**: Hono + JSX
- **デプロイ**: Wrangler

## 📁 構成

```
├── server/
│   ├── index.jsx              # Honoサーバー
│   └── components/
│       ├── Layout.jsx         # Header, Footer
│       ├── HomePage.jsx       # ホームページ
│       ├── PrivacyPage.jsx    # プライバシーポリシー
│       └── TermsPage.jsx      # 利用規約
├── public/
│   ├── styles.css             # グローバルCSS
│   ├── icon.jpg               # アプリアイコン
│   ├── robots.txt
│   └── sitemap.xml
├── package.json
└── wrangler.toml
```

## 🚀 開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動
pnpm dev

# デプロイ
pnpm deploy
```

## 📱 アプリ本体

- **GitHub**: https://github.com/ryuya0124/musical_note_calculator
- **プラットフォーム**: iOS, iPadOS, macOS, Android, Windows, Linux

## 📄 ライセンス

MIT License
