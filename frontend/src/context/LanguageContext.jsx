import { createContext, useContext, useState, useEffect } from "react";
import { translations, LANGUAGES } from "../translations/translations";

const LanguageContext = createContext();

const STORAGE_KEY = "findit_language";

function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return current;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === "en" || saved === "hi" || saved === "pa")) {
        return saved;
      }
    } catch {
      // ignore localStorage errors
    }
    return "en";
  });

  const changeLanguage = (code) => {
    if (code && (code === "en" || code === "hi" || code === "pa")) {
      setLanguageState(code);
      try {
        localStorage.setItem(STORAGE_KEY, code);
      } catch (err) {
        console.error("Failed to save language preference:", err);
      }
    }
  };

  // Helper function to translate nested key
  const t = (key, fallback = "") => {
    const activeDict = translations[language] || translations.en;
    const value = getNestedValue(activeDict, key);
    if (value !== undefined) {
      return value;
    }
    // Fallback to English dictionary
    const fallbackValue = getNestedValue(translations.en, key);
    if (fallbackValue !== undefined) {
      return fallbackValue;
    }
    return fallback || key;
  };

  const currentLanguageMeta =
    LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    // Optionally set html lang attribute for accessibility
    try {
      document.documentElement.lang = language;
    } catch {
      // ignore
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
        languages: LANGUAGES,
        currentLanguageMeta,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

