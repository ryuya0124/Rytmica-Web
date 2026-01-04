/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

// 利用規約ページ
export const TermsPage = () => (
  <section class="legal-page">
    <div class="container">
      <div class="legal-content">
        <h1 class="legal-title" data-i18n="terms.title">利用規約</h1>
        <p class="legal-updated" data-i18n="terms.updated">最終更新日: 2026年1月2日</p>
        
        <div class="legal-section">
          <h2 data-i18n="terms.licenseTitle">ライセンス</h2>
          <p data-i18n="terms.licenseContent">本アプリはMITライセンスのもとで提供されるオープンソースソフトウェアです。</p>
          <ul>
            <li data-i18n="terms.licenseList1">ソースコードは自由に使用、コピー、変更、マージ、公開、配布できます</li>
            <li data-i18n="terms.licenseList2">本ソフトウェアは「現状のまま」提供され、いかなる保証も行いません</li>
          </ul>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="terms.freeTitle">無料提供</h2>
          <p data-i18n="terms.freeContent">本アプリは完全無料で提供されています。広告も表示されません。</p>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="terms.disclaimerTitle">免責事項</h2>
          <p data-i18n="terms.disclaimerContent">本アプリの使用によって生じた損害について、開発者は一切の責任を負いません。計算結果の正確性について保証するものではありません。</p>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="terms.ipTitle">知的財産権</h2>
          <p data-i18n="terms.ipContent">本アプリで使用されている音ゲー関連の用語やゲーム名は、各権利者に帰属します。本アプリはこれらのゲームの公式アプリではありません。</p>
        </div>
        
        <div class="legal-section">
          <h2 data-i18n="terms.changesTitle">規約の変更</h2>
          <p data-i18n="terms.changesContent">本規約は予告なく変更されることがあります。変更後も本アプリを継続して使用された場合、新しい規約に同意したものとみなします。</p>
        </div>
      </div>
    </div>
  </section>
)
