import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function About() {
  return (
    <section id="about" className="container section-grid">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">Chi sono</p>
        <h2>Uno studente che vuole lasciare il segno.</h2>
        <p>{profile.about}</p>
      </motion.div>

      <div className="info-cards">
        <div className="mini-card">
          <h3>Eleganza</h3>
          <p>Uno stile raffinato, pulito e premium, basato sul verde bottiglia.</p>
        </div>
        <div className="mini-card">
          <h3>Personalità</h3>
          <p>Un modo moderno per raccontare chi sei, i tuoi interessi e la tua visione.</p>
        </div>
        <div className="mini-card">
          <h3>Presenza</h3>
          <p>Una vetrina digitale pensata per lasciare un’impressione seria e curata.</p>
        </div>
      </div>
    </section>
  );
}
