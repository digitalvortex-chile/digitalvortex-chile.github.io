import { createContext, useContext } from 'react';

export const LanguageContext = createContext(null);

/** Returns { lang, setLang, t } — t is the copy for the active language. */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
