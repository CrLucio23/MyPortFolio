import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function About({ compact = false }) {
  return (
    <section id="about" className={`section-grid${compact ? " section-grid-compact" : ""}`}>
      <motion.div className="about-lead" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="section-label">Il mio profilo</p>
        <h2>Imparo costruendo, un progetto alla volta.</h2>
        <p>{profile.about}</p>
      </motion.div>
      <div className="info-cards">
        <article className="mini-card"><span>01</span><h3>Formazione</h3><p>Studente di Informatica L-31 presso l’Università degli Studi di Salerno. Diplomato come Perito Informatico presso l’I.I.S. Antonio Pacinotti di Scafati.</p></article>
        <article className="mini-card"><span>02</span><h3>Esperienza</h3><p>Stage di 4 mesi in Belgio presso Bravo Discovery: manutenzione WordPress, gestione email e supporto in lingua inglese.</p></article>
        <article className="mini-card"><span>03</span><h3>Progetti</h3><p>Logica Java per un sistema di accesso tramite impronta digitale e apertura automatizzata di un tornello.</p></article>
      </div>
    </section>
  );
}
