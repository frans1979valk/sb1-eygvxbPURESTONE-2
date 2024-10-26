import { useState, useEffect } from 'react';
import type { Language } from '@/config/i18n';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('nl');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'nl' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'nl' ? 'en' : 'nl';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return { language, toggleLanguage };
}