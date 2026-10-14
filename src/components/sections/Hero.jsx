import { motion } from "framer-motion";
import { ArrowDown, ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";
import profileImg from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <motion.div className="hero-text" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="section-label hero-eyebrow"><span className="status-dot" /> Informatica, web & design</p>
        <h1 id="hero-title">Tra logica<br />e <em>creatività.</em></h1>
        <p className="hero-description">Sono <strong>Luciano Cretella.</strong> {profile.tagline}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Esplora i miei progetti <ArrowDown size={16} aria-hidden="true" /></a>
          <a href={profile.curriculum} download="Curriculum_Luciano_Cretella.pdf" className="text-link">Scarica il CV <ArrowDownToLine size={15} aria-hidden="true" /></a>
        </div>
        <a href={profile.project.url} target="_blank" rel="noopener noreferrer" className="creator-link"><span className="creator-mark" aria-hidden="true">lt.</span><span>Creatore di <strong>{profile.project.domain}</strong></span><ArrowUpRight size={15} aria-hidden="true" /></a>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}>
        <div className="portrait-topline"><span>Curiosità, metodo, nuove idee.</span><span aria-hidden="true">01 / LC</span></div>
        <div className="hero-photo-frame">
          <img src={profileImg} alt="Ritratto di Luciano Cretella" className="hero-photo" width="1600" height="1550" fetchPriority="high" />
          <div className="hero-photo-caption"><span>Un’idea alla volta.<br /><strong>Un progetto alla volta.</strong></span><span className="portrait-asterisk" aria-hidden="true">✳</span></div>
        </div>
        <div className="portrait-note"><span className="status-dot" /> Aperto a nuove opportunità</div>
      </motion.div>
      <div className="hero-facts" aria-label="Il mio percorso in breve">
        <div><span className="fact-index">01 / FORMAZIONE</span><p>Informatica <span>· Università di Salerno</span></p></div>
        <div><span className="fact-index">02 / ESPERIENZA</span><p>Belgio <span>· 4 mesi di stage</span></p></div>
        <div><span className="fact-index">03 / PROGETTO</span><a href={profile.project.url} target="_blank" rel="noopener noreferrer">Luto Atelier <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </div>
    </section>
  );
}
