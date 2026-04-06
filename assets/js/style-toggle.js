(function () {
  const STORAGE_KEY = 'ash-foundry-style';
  const DEFAULT_STYLE = 'ember';
  const STYLES = {
    ember: '/ash-foundry/assets/css/foundry-ember.css',
    glass: '/ash-foundry/assets/css/foundry-glass.css',
  };

  function normalizeStyle(value) {
    return Object.prototype.hasOwnProperty.call(STYLES, value) ? value : DEFAULT_STYLE;
  }

  function getCurrentStyle() {
    try {
      return normalizeStyle(localStorage.getItem(STORAGE_KEY) || DEFAULT_STYLE);
    } catch {
      return DEFAULT_STYLE;
    }
  }

  function setStoredStyle(style) {
    try {
      localStorage.setItem(STORAGE_KEY, normalizeStyle(style));
    } catch {}
  }

  function applyStyle(style) {
    const normalized = normalizeStyle(style);
    const link = document.getElementById('site-style-link');
    if (!link) return;
    link.setAttribute('href', STYLES[normalized]);
    document.documentElement.setAttribute('data-style', normalized);
    document.querySelectorAll('[data-style-select]').forEach((el) => {
      if ('value' in el) el.value = normalized;
    });
  }

  function bindControls() {
    document.querySelectorAll('[data-style-select]').forEach((control) => {
      control.addEventListener('change', (event) => {
        const next = normalizeStyle(event.target.value);
        setStoredStyle(next);
        applyStyle(next);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyle(getCurrentStyle());
    bindControls();
  });
})();
