import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { IconContext } from "@phosphor-icons/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./i18n/LanguageProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ActionLink from "./components/ui/ActionLink";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function RouteEffects() {
  const { pathname, hash } = useLocation();
  const { copy } = useLanguage();
  useEffect(() => {
    const titles = {
      "/": copy.meta.home,
      "/about": copy.meta.about,
      "/contact": copy.meta.contact,
    };
    document.title = `${titles[pathname] || copy.meta.notFound} | Luciano Cretella`;
  }, [pathname, copy]);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash)
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  const { copy, localPath } = useLanguage();
  return (
    <section className="not-found">
      <p className="eyebrow">{copy.notFound.label}</p>
      <h1>{copy.notFound.title}</h1>
      <p>{copy.notFound.text}</p>
      <ActionLink to={localPath("/")} className="btn-primary">
        {copy.notFound.back}
      </ActionLink>
    </section>
  );
}

function Portfolio() {
  const { copy } = useLanguage();
  return (
    <>
      <RouteEffects />
      <a className="skip-link" href="#main-content">
        {copy.nav.skip}
      </a>
      <Navbar />
      <div className="portfolio-shell">
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <span className="sr-only" role="status" aria-live="polite">
        {copy.language.changed}
      </span>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <MotionConfig reducedMotion="user">
          <IconContext.Provider value={{ weight: "light" }}>
            <Portfolio />
          </IconContext.Provider>
        </MotionConfig>
      </LanguageProvider>
    </BrowserRouter>
  );
}
