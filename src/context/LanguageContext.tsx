"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

type Lang = "en" | "es";
type Translations = typeof en;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => any;
}

const translations: Record<Lang, Translations> = { en, es };

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

function getNestedValue(obj: any, key: string): any {
  return key.split(".").reduce((acc, k) => acc?.[k], obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "es") {
      setLangState(saved);
    } else {
      const browserLang = navigator.language.startsWith("es") ? "es" : "en";
      setLangState(browserLang);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string) => getNestedValue(translations[lang], key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => useContext(LanguageContext);
