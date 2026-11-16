const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 12) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  document.body.classList.toggle('nav-open');
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => observer.observe(element));


// V7: bilingual content switching (no page reload, no network requests).
(function initLanguageSwitcher() {
  const translations = window.siteTranslations;
  if (!translations) return;
  const buttons = [...document.querySelectorAll('.lang-button')];
  const translationNodes = [...document.querySelectorAll('[data-i18n]')];
  const attributeNodes = [...document.querySelectorAll('*')].filter(el => [...el.attributes].some(a => a.name.startsWith('data-i18n-attr-')));
  const metaNodes = [...document.querySelectorAll('[data-i18n-meta]')];
  function setLanguage(lang, persist = true) {
    if (!Object.hasOwn(translations, lang)) lang = 'en';
    const dict = translations[lang];
    translationNodes.forEach(el => {
      const key = el.dataset.i18n;
      if (Object.hasOwn(dict, key)) el.textContent = dict[key];
    });
    attributeNodes.forEach(el => {
      [...el.attributes].forEach(a => {
        if (a.name.startsWith('data-i18n-attr-')) {
          const targetAttribute = a.name.slice('data-i18n-attr-'.length);
          if (Object.hasOwn(dict, a.value)) el.setAttribute(targetAttribute, dict[a.value]);
        }
      });
    });
    metaNodes.forEach(el => {
      const key = el.dataset.i18nMeta;
      if (Object.hasOwn(dict, key)) el.setAttribute('content', dict[key]);
    });
    document.documentElement.lang = lang;
    buttons.forEach(button => {
      const active = button.dataset.lang === lang;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('active', active);
    });
    if (persist) {
      try { localStorage.setItem('iq-language', lang); } catch (_) {}
    }
  }
  let saved = null;
  try { saved = localStorage.getItem('iq-language'); } catch (_) {}
  const fromURL = new URLSearchParams(window.location.search).get('lang');
  const firstLanguage = ['en', 'es'].includes(fromURL) ? fromURL : (['en','es'].includes(saved) ? saved : 'en');
  setLanguage(firstLanguage, Boolean(fromURL));
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
})();
