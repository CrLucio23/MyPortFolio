import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const titles = { "/": "Portfolio", "/about": "Chi sono", "/contact": "Contatti" };
    document.title = `${titles[pathname] || "Pagina non trovata"} | Luciano Cretella`;
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <RouteEffects />
        <div className="app">
          <a className="skip-link" href="#main-content">Vai al contenuto</a>
          <Navbar />
          <div className="portfolio-shell">
            <main className="main" id="main-content" tabIndex={-1}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<section className="not-found"><p className="section-label">Errore 404</p><h1>Qui non c’è una pagina.</h1><p>Ripartiamo dai progetti e dalle idee.</p><Link to="/" className="btn btn-primary">Torna alla home</Link></section>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
}
