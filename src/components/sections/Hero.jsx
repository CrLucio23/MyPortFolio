import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "../../data/profile";
import profileImg from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-text">
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pill"
        >
          CV interattivo • elegante • moderno
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {profile.name}
          <span>{profile.role}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-buttons"
        >
          <a href="/about" className="btn btn-primary">
            Scopri chi sono <ArrowRight size={18} />
          </a>
          <a href="/contact" className="btn btn-secondary">
            I miei contatti
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-photo-shell"
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-photo-glow"></div>

        <motion.div
          className="hero-photo-frame"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={profileImg} alt="Foto profilo portfolio" className="hero-photo" />
          <div className="hero-photo-overlay"></div>
        </motion.div>

        <div className="hero-photo-badge">
          <span></span>
          Disponibile a nuove opportunità
        </div>
      </motion.div>
    </section>
  );
}