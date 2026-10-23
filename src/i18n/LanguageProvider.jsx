import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { messages } from "./messages";

const LanguageContext = createContext(null);
const storageKey = "lc-portfolio-language";
const supported = (value) => Object.hasOwn(messages, value);

function initialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (supported(requested)) return requested;
  try {
    const saved = localStorage.getItem(storageKey);
    if (supported(saved)) return saved;
  } catch {
    /* La navigazione deve funzionare anche senza accesso allo storage. */
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "it";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);
  const location = useLocation();
  const navigate = useNavigate();
  const copy = messages[language];

  useEffect(() => {
    const requested = new URLSearchParams(location.search).get("lang");
    if (supported(requested)) setLanguage(requested);
  }, [location.search]);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      /* Preferenza valida per la sessione. */
    }
    const metadata = {
      'meta[name="description"]': copy.meta.description,
      'meta[property="og:description"]': copy.meta.description,
      'meta[property="og:title"]': copy.meta.socialTitle,
      'meta[property="og:locale"]': copy.meta.locale,
    };
    Object.entries(metadata).forEach(([selector, content]) => {
      document.querySelector(selector)?.setAttribute("content", content);
    });
  }, [language, copy]);

  const changeLanguage = (next) => {
    if (!supported(next) || next === language) return;
    setLanguage(next);
    const query = new URLSearchParams(location.search);
    query.set("lang", next);
    navigate(
      { pathname: location.pathname, search: `?${query}`, hash: location.hash },
      { replace: true },
    );
  };

  const localPath = (path) => {
    const url = new URL(path, window.location.origin);
    url.searchParams.set("lang", language);
    return `${url.pathname}${url.search}${url.hash}`;
  };

  return (
    <LanguageContext.Provider
      value={{ language, copy, changeLanguage, localPath }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}
