/**
 * i18n (国際化) モジュール - Rytmica ウェブサイト
 * クライアントサイドでの言語切り替えを実現
 */
(function() {
  'use strict';

  // 対応言語
  const SUPPORTED_LANGS = ['ja', 'en'];
  const DEFAULT_LANG = 'ja';
  const STORAGE_KEY = 'rytmica_lang';

  /**
   * ブラウザの言語設定を検出
   */
  function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage || '';
    const primaryLang = browserLang.split('-')[0].toLowerCase();
    return SUPPORTED_LANGS.includes(primaryLang) ? primaryLang : 'en';
  }

  /**
   * 保存されている言語設定を取得
   */
  function getSavedLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  /**
   * 言語設定を保存
   */
  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('言語設定の保存に失敗しました');
    }
  }

  /**
   * 現在の言語を取得
   */
  function getCurrentLanguage() {
    const saved = getSavedLanguage();
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }
    return detectBrowserLanguage();
  }

  /**
   * ネストされたオブジェクトからキーで値を取得
   * 例: getNestedValue(obj, 'hero.subtitle') => obj.hero.subtitle
   */
  function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  }

  /**
   * DOMを更新して翻訳を適用
   */
  function updateDOM(lang) {
    if (!window.translations || !window.translations[lang]) {
      console.warn('翻訳データが見つかりません:', lang);
      return;
    }

    const t = window.translations[lang];

    // data-i18n 属性を持つ要素を翻訳
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const value = getNestedValue(t, key);
      
      if (value !== null) {
        // HTML を含む場合は innerHTML を使用
        if (value.includes('<') && value.includes('>')) {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }
      }
    });

    // data-i18n-placeholder 属性（プレースホルダー用）
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const value = getNestedValue(t, key);
      if (value !== null) {
        element.placeholder = value;
      }
    });

    // data-i18n-aria 属性（アクセシビリティ用）
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const key = element.getAttribute('data-i18n-aria');
      const value = getNestedValue(t, key);
      if (value !== null) {
        element.setAttribute('aria-label', value);
      }
    });

    // html lang 属性を更新
    document.documentElement.lang = lang;

    // 言語ボタンのテキストを更新
    const langBtn = document.getElementById('lang-toggle-text');
    if (langBtn) {
      langBtn.textContent = lang === 'ja' ? 'EN' : 'JA';
    }
  }

  /**
   * 言語を設定
   */
  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) {
      console.warn('サポートされていない言語:', lang);
      return;
    }
    
    saveLanguage(lang);
    updateDOM(lang);
  }

  /**
   * 言語を切り替え
   */
  function toggleLanguage() {
    const current = getCurrentLanguage();
    const next = current === 'ja' ? 'en' : 'ja';
    setLanguage(next);
  }

  /**
   * 初期化
   */
  function init() {
    // 翻訳データがロードされるまで待機
    if (!window.translations) {
      setTimeout(init, 50);
      return;
    }

    const currentLang = getCurrentLanguage();
    updateDOM(currentLang);

    // 言語切り替えボタンのイベントリスナー
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', toggleLanguage);
    }
  }

  // グローバルに公開
  window.i18n = {
    getCurrentLanguage,
    setLanguage,
    toggleLanguage,
    init
  };

  // DOM読み込み後に初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
