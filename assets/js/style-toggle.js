(function () {
  const STYLE_STORAGE_KEY = 'ash-foundry-style';
  const VIEW_STORAGE_KEY = 'ash-foundry-view-mode';
  const DEFAULT_STYLE = 'ember';
  const DEFAULT_VIEW_MODE = 'auto';
  const STYLE_PATHS = {
    ember: 'assets/css/foundry-ember.css',
    glass: 'assets/css/foundry-glass.css',
    pocket: 'assets/css/foundry-pocket.css',
  };
  const VIEW_MODES = {
    auto: 'auto',
    portrait: 'portrait',
  };

  function normalizeStyle(value) {
    return Object.prototype.hasOwnProperty.call(STYLE_PATHS, value) ? value : DEFAULT_STYLE;
  }

  function normalizeViewMode(value) {
    return Object.prototype.hasOwnProperty.call(VIEW_MODES, value) ? value : DEFAULT_VIEW_MODE;
  }

  function getStoredValue(key, fallback, normalizer) {
    try {
      return normalizer(localStorage.getItem(key) || fallback);
    } catch {
      return fallback;
    }
  }

  function setStoredValue(key, value, normalizer) {
    try {
      localStorage.setItem(key, normalizer(value));
    } catch {}
  }

  function resolveStyleHref(style) {
    const normalized = normalizeStyle(style);
    const relativePath = STYLE_PATHS[normalized];
    return new URL(relativePath, document.baseURI).href;
  }

  function applyStyle(style) {
    const normalized = normalizeStyle(style);
    const link = document.getElementById('site-style-link');
    if (!link) return;
    link.setAttribute('href', resolveStyleHref(normalized));
    document.documentElement.setAttribute('data-style', normalized);
    document.querySelectorAll('[data-style-select]').forEach((el) => {
      if ('value' in el) el.value = normalized;
    });
  }

  function applyViewMode(mode) {
    const normalized = normalizeViewMode(mode);
    document.documentElement.setAttribute('data-view-mode', normalized);
    document.querySelectorAll('[data-view-select]').forEach((el) => {
      if ('value' in el) el.value = normalized;
    });
  }

  function bindControls() {
    document.querySelectorAll('[data-style-select]').forEach((control) => {
      control.addEventListener('change', (event) => {
        const next = normalizeStyle(event.target.value);
        setStoredValue(STYLE_STORAGE_KEY, next, normalizeStyle);
        applyStyle(next);
      });
    });

    document.querySelectorAll('[data-view-select]').forEach((control) => {
      control.addEventListener('change', (event) => {
        const next = normalizeViewMode(event.target.value);
        setStoredValue(VIEW_STORAGE_KEY, next, normalizeViewMode);
        applyViewMode(next);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyle(getStoredValue(STYLE_STORAGE_KEY, DEFAULT_STYLE, normalizeStyle));
    applyViewMode(getStoredValue(VIEW_STORAGE_KEY, DEFAULT_VIEW_MODE, normalizeViewMode));
    bindControls();
  });
})();
