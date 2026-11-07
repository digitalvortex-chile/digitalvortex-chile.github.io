import { useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './context';
import { LANGUAGES, translations } from './translations';

const STORAGE_KEY = 'dv-lang';

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // storage blocked (private mode) — fall through to browser language
  }
  const browser = (navigator.language || '').toLowerCase();
  return browser.startsWith('en') ? 'en' : 'es';
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
