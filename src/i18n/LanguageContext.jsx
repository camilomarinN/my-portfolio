import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const STORAGE_KEY = "portfolio-lang";
const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* localStorage no disponible: seguimos con el idioma del navegador */
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignorar */
    }
  }, [lang]);

  const toggleLang = useCallback(() => setLang((l) => (l === "es" ? "en" : "es")), []);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: translations[lang] }),
    [lang, toggleLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de <LanguageProvider>");
  return ctx;
}
