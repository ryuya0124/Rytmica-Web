/**
 * 翻訳データ - Rytmica ウェブサイト
 * 日本語/英語対応
 */
const translations = {
  ja: {
    // ナビゲーション
    nav: {
      home: 'ホーム',
      github: 'GitHub',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      support: 'サポート',
      langToggle: '言語切替'
    },
    // ヒーローセクション
    hero: {
      subtitle: '音ゲーマーのための便利ツール。<br />BPMと音符の計算、餡蜜の判定確認をサポートします。',
      noAds: '広告なし',
      openSource: 'オープンソース',
      download: 'ダウンロード'
    },
    // 機能セクション
    features: {
      title: '主な機能',
      noteCalc: '音符計算',
      noteCalcDesc: '各音符（4分・8分・16分・付点など）の長さをミリ秒で表示します。',
      anmitsu: '餡蜜チェッカー',
      anmitsuDesc: '同時押ししてもPERFECTが出るか確認できます。多数のゲーム別プリセット搭載。',
      noteConvert: '音符換算',
      noteConvertDesc: '異なるBPM間で音符を変換します。',
      noteCount: '音符回数計算',
      noteCountDesc: '指定した時間内で各音符が何回発生するかを計算します。',
      metronome: 'メトロノーム',
      metronomeDesc: '高精度メトロノーム搭載。リズム練習に最適です。',
      customize: 'カスタマイズ',
      customizeDesc: 'カスタム音符の追加、表示する音符の選択、ダークモード対応。'
    },
    // プラットフォームセクション
    platforms: {
      title: '対応プラットフォーム',
      testflight: 'TestFlight',
      appStore: 'App Store (Coming Soon)',
      fdroid: 'F-Droid (Coming Soon)',
      githubReleases: 'GitHub Releases'
    },
    // フッター
    footer: {
      copyright: '© 2026 Rytmica. All rights reserved.'
    },
    // プライバシーポリシー
    privacy: {
      title: 'プライバシーポリシー',
      updated: '最終更新日: 2025年1月1日',
      intro: '本アプリ「Rytmica」（以下「本アプリ」）は、お客様のプライバシーを尊重し、以下のポリシーに従って運営されています。',
      noDataTitle: '収集しないデータ',
      noDataContent: '本アプリは個人情報を一切収集しません。',
      noDataList1: '個人情報（名前、メールアドレス、電話番号など）',
      noDataList2: '位置情報',
      noDataList3: '使用状況や分析データ',
      noDataList4: 'Cookie やトラッキング情報',
      noDataList5: 'その他いかなるユーザーデータ',
      localStorageTitle: 'ローカルストレージ',
      localStorageContent: '本アプリは、ユーザー設定（テーマ設定、音符表示設定など）をデバイス内のローカルストレージにのみ保存します。これらのデータは外部サーバーに送信されることはありません。',
      adsTitle: '広告について',
      adsContent: '本アプリには広告が表示されません。第三者の広告ネットワークやトラッキングサービスは一切使用していません。',
      openSourceTitle: 'オープンソース',
      openSourceContent: '本アプリは MIT ライセンスのオープンソースソフトウェアです。ソースコードは GitHub で公開されており、誰でも確認することができます。',
      changesTitle: 'ポリシーの変更',
      changesContent: '本ポリシーは予告なく変更されることがあります。重要な変更がある場合は、アプリ内またはウェブサイトでお知らせします。',
      contactTitle: 'お問い合わせ',
      contactContent: 'プライバシーに関するご質問やご懸念がある場合は、サポートページからご連絡ください。'
    },
    // 利用規約
    terms: {
      title: '利用規約',
      updated: '最終更新日: 2025年1月1日',
      intro: '本アプリ「Rytmica」（以下「本アプリ」）の利用にあたり、以下の規約に同意いただいたものとみなします。',
      licenseTitle: 'ライセンス',
      licenseContent: '本アプリはMITライセンスのもとで提供されるオープンソースソフトウェアです。',
      licenseList1: 'ソースコードは自由に使用、コピー、変更、マージ、公開、配布できます',
      licenseList2: '本ソフトウェアは「現状のまま」提供され、いかなる保証も行いません',
      freeTitle: '無料提供',
      freeContent: '本アプリは完全無料で提供されています。広告も表示されません。',
      disclaimerTitle: '免責事項',
      disclaimerContent: '本アプリの使用によって生じた損害について、開発者は一切の責任を負いません。計算結果の正確性について保証するものではありません。',
      ipTitle: '知的財産権',
      ipContent: '本アプリで使用されている音ゲー関連の用語やゲーム名は、各権利者に帰属します。本アプリはこれらのゲームの公式アプリではありません。',
      changesTitle: '規約の変更',
      changesContent: '本規約は予告なく変更されることがあります。変更後も本アプリを継続して使用された場合、新しい規約に同意したものとみなします。'
    },
    // サポート
    support: {
      title: 'サポート',
      intro: 'Rytmicaに関するご質問やお問い合わせは、以下の方法でお願いします。',
      emailTitle: 'メールでのお問い合わせ',
      emailLabel: 'メールで問い合わせる',
      githubTitle: 'GitHubでの報告',
      githubContent: 'バグ報告や機能リクエストは、GitHubのIssueページからお願いします。',
      githubLink: 'GitHubで Issue を作成する',
      faqTitle: 'よくある質問',
      faq1Q: 'アプリは無料ですか？',
      faq1A: 'はい、Rytmicaは完全無料でご利用いただけます。広告も表示されません。',
      faq2Q: 'どのプラットフォームで使えますか？',
      faq2A: 'iOS、iPadOS、macOS、Android、Windows、Linuxに対応しています。',
      faq3Q: '個人情報は収集されますか？',
      faq3A: 'いいえ、本アプリは一切の個人情報を収集しません。詳しくはプライバシーポリシーをご覧ください。'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      github: 'GitHub',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      support: 'Support',
      langToggle: 'Language'
    },
    // Hero Section
    hero: {
      subtitle: 'Handy tools for rhythm gamers.<br />Calculate BPM, note timing, and check simultaneous hit timing.',
      noAds: 'No Ads',
      openSource: 'Open Source',
      download: 'Download'
    },
    // Features Section
    features: {
      title: 'Features',
      noteCalc: 'Note Calculator',
      noteCalcDesc: 'Display the length of each note (quarter, eighth, sixteenth, dotted, etc.) in milliseconds.',
      anmitsu: 'Timing Checker',
      anmitsuDesc: 'Check if simultaneous hits will still register as PERFECT. Includes presets for many rhythm games.',
      noteConvert: 'Note Converter',
      noteConvertDesc: 'Convert notes between different BPMs.',
      noteCount: 'Note Counter',
      noteCountDesc: 'Calculate how many times each note occurs within a specified time.',
      metronome: 'Metronome',
      metronomeDesc: 'High-precision metronome. Perfect for rhythm practice.',
      customize: 'Customization',
      customizeDesc: 'Add custom notes, select which notes to display, and dark mode support.'
    },
    // Platforms Section
    platforms: {
      title: 'Platforms',
      testflight: 'TestFlight',
      appStore: 'App Store (Coming Soon)',
      fdroid: 'F-Droid (Coming Soon)',
      githubReleases: 'GitHub Releases'
    },
    // Footer
    footer: {
      copyright: '© 2026 Rytmica. All rights reserved.'
    },
    // Privacy Policy
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: January 1, 2025',
      intro: 'This app "Rytmica" (hereinafter "the App") respects your privacy and operates according to the following policy.',
      noDataTitle: 'Data We Do Not Collect',
      noDataContent: 'This App does not collect any personal information whatsoever.',
      noDataList1: 'Personal information (name, email address, phone number, etc.)',
      noDataList2: 'Location data',
      noDataList3: 'Usage or analytics data',
      noDataList4: 'Cookies or tracking information',
      noDataList5: 'Any other user data',
      localStorageTitle: 'Local Storage',
      localStorageContent: 'This App stores user settings (theme settings, note display settings, etc.) only in local storage on your device. This data is never sent to external servers.',
      adsTitle: 'About Advertisements',
      adsContent: 'This App does not display any advertisements. We do not use any third-party advertising networks or tracking services.',
      openSourceTitle: 'Open Source',
      openSourceContent: 'This App is open source software under the MIT License. The source code is available on GitHub for anyone to review.',
      changesTitle: 'Changes to This Policy',
      changesContent: 'This policy may be changed without notice. If there are significant changes, we will notify you within the app or on the website.',
      contactTitle: 'Contact Us',
      contactContent: 'If you have any questions or concerns about privacy, please contact us through the support page.'
    },
    // Terms of Service
    terms: {
      title: 'Terms of Service',
      updated: 'Last updated: January 1, 2025',
      intro: 'By using this app "Rytmica" (hereinafter "the App"), you agree to the following terms.',
      licenseTitle: 'License',
      licenseContent: 'This App is open source software provided under the MIT License.',
      licenseList1: 'You are free to use, copy, modify, merge, publish, and distribute the source code',
      licenseList2: 'This software is provided "as is" without any warranty',
      freeTitle: 'Free of Charge',
      freeContent: 'This App is provided completely free of charge. No advertisements are displayed.',
      disclaimerTitle: 'Disclaimer',
      disclaimerContent: 'The developer assumes no responsibility for any damages arising from the use of this App. We do not guarantee the accuracy of calculation results.',
      ipTitle: 'Intellectual Property',
      ipContent: 'Rhythm game-related terms and game names used in this App belong to their respective rights holders. This App is not an official app for any of these games.',
      changesTitle: 'Changes to Terms',
      changesContent: 'These terms may be changed without notice. If you continue to use this App after changes are made, you will be deemed to have agreed to the new terms.'
    },
    // Support
    support: {
      title: 'Support',
      intro: 'For questions or inquiries about Rytmica, please use the following methods.',
      emailTitle: 'Email Inquiry',
      emailLabel: 'Send Email',
      githubTitle: 'Report on GitHub',
      githubContent: 'Please submit bug reports and feature requests through the GitHub Issues page.',
      githubLink: 'Create an Issue on GitHub',
      faqTitle: 'FAQ',
      faq1Q: 'Is the app free?',
      faq1A: 'Yes, Rytmica is completely free to use. No advertisements are displayed.',
      faq2Q: 'Which platforms are supported?',
      faq2A: 'Supports iOS, iPadOS, macOS, Android, Windows, and Linux.',
      faq3Q: 'Is personal information collected?',
      faq3A: 'No, this App does not collect any personal information. Please see our Privacy Policy for details.'
    }
  }
};

// グローバルに公開
if (typeof window !== 'undefined') {
  window.translations = translations;
}
