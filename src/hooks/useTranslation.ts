// src/hooks/useTranslation.ts
import { useEffect, useState } from 'react';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import ptTranslations from '../translations/pt.json';

type Translations = {
  [key: string]: string;
};

const translations: { [lang: string]: Translations } = {
  en: enTranslations,
  es: esTranslations,
  pt: ptTranslations,
  // Agrega más idiomas según sea necesario
};

export function useTranslation() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Detecta el idioma del atributo lang del HTML
    const detectLanguage = () => {
      const htmlLang = document.documentElement.lang || 'en';
      // Extrae el código principal del idioma (ej: 'es' de 'es-ES')
      const primaryLang = htmlLang.split('-')[0].toLowerCase();
      
      // Verifica si tenemos traducciones para este idioma
      const supportedLanguages = Object.keys(translations);
      const lang = supportedLanguages.includes(primaryLang) 
        ? primaryLang 
        : 'en';
      
      setLanguage(lang);
    };

    detectLanguage();
    
    // Opcional: Observar cambios en el atributo lang (si es dinámico)
    const observer = new MutationObserver(detectLanguage);
    observer.observe(document.documentElement, {
      attributeFilter: ['lang'],
      attributes: true
    });

    return () => observer.disconnect();
  }, []);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return { t, language };
}