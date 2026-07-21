import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import profileImg from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="pill">
          Portfolio personale · 2026
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          Costruisco idee<br /><span>attraverso il codice.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Studio informatica, progetto interfacce e trasformo la curiosità per la tecnologia in esperienze digitali concrete.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hero-buttons">
          <Link to="/about" className="btn btn-primary">Esplora il mio percorso</Link>
          <a href={profile.curriculum} download="Curriculum_Luciano_Cretella.pdf" className="text-link">Scarica il Curriculum</a>
        </motion.div>
      </div>

      <motion.div className="hero-photo-shell" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
        <div className="hero-photo-frame">
          <img src={profileImg} alt="Ritratto di Luciano Cretella" className="hero-photo" />
          <div className="hero-photo-overlay" />
        </div>
        <div className="hero-photo-badge"><span />Disponibile a nuove opportunità</div>
      </motion.div>

      <div className="hero-stats" aria-label="Dati del percorso">
        <p><strong>4</strong><span>mesi di esperienza internazionale</span></p>
        <p><strong>L-31</strong><span>percorso universitario</span></p>
        <p><strong>2</strong><span>lingue di lavoro</span></p>
      </div>
    </section>
  );
}
