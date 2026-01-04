/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

// プライバシーポリシーページ
export const PrivacyPage = () => (
  <section class="legal-page">
    <div class="container">
      <div class="legal-content">
        <h1 class="legal-title" data-i18n="privacy.title">プライバシーポリシー</h1>
        <p class="legal-updated" data-i18n="privacy.updated">最終更新日: 2026年1月2日</p>
        
        <div class="legal-section">
          <h2 data-i18n="privacy.noDataTitle">収集しないデータ</h2>
          <p data-i18n="privacy.noDataContent">本アプリは個人情報を一切収集しません。</p>
          <ul>
            <li data-i18n="privacy.noDataList1">個人情報（名前、メールアドレス、電話番号など）</li>
            <li data-i18n="privacy.noDataList2">位置情報</li>
            <li data-i18n="privacy.noDataList3">使用状況や分析データ</li>
            <li data-i18n="privacy.noDataList4">Cookie やトラッキング情報</li>
            <li data-i18n="privacy.noDataList5">その他いかなるユーザーデータ</li>
          </ul>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="privacy.localStorageTitle">ローカルストレージ</h2>
          <p data-i18n="privacy.localStorageContent">本アプリは、ユーザー設定（テーマ設定、音符表示設定など）をデバイス内のローカルストレージにのみ保存します。これらのデータは外部サーバーに送信されることはありません。</p>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="privacy.adsTitle">広告について</h2>
          <p data-i18n="privacy.adsContent">本アプリには広告が表示されません。第三者の広告ネットワークやトラッキングサービスは一切使用していません。</p>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="privacy.openSourceTitle">オープンソース</h2>
          <p data-i18n="privacy.openSourceContent">本アプリは MIT ライセンスのオープンソースソフトウェアです。ソースコードは GitHub で公開されており、誰でも確認することができます。</p>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="privacy.contactTitle">お問い合わせ</h2>
          <p data-i18n="privacy.contactContent">プライバシーに関するご質問やご懸念がある場合は、サポートページからご連絡ください。</p>
        </div>
      </div>
    </div>
  </section>
)
