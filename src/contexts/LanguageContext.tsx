import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/data/translations';

type Lang = 'en' | 'ar';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
  t: (typeof translations)['en'] | (typeof translations)['ar'];
  showSplash: boolean;
  dismissSplash: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [showSplash, setShowSplash] = useState(() => !localStorage.getItem('byci-visited'));
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem('byci-lang') as Lang) || 'en');

  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const isRTL = lang === 'ar';
  const t = translations[lang];

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('byci-lang', newLang);
  };

  const dismissSplash = (selectedLang: Lang) => {
    setLang(selectedLang);
    setShowSplash(false);
    localStorage.setItem('byci-visited', 'true');
  };

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, isRTL, t, showSplash, dismissSplash }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
