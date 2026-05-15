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
          <h3>Formazione</h3>
          <p>
            Studente di Informatica L-31 presso l’Università degli Studi di
            Salerno. Diplomato come Perito Informatico presso l’I.I.S. Antonio
            Pacinotti di Scafati.
          </p>
        </div>
        <div className="mini-card">
          <h3>Esperienza</h3>
          <p>
            Stage di 4 mesi in Belgio presso Bravo Discovery, dove mi sono
            occupato della manutenzione di un sito WordPress, gestione email e
            supporto in lingua inglese.
          </p>
        </div>
        <div className="mini-card">
          <h3>Progetti</h3>
          <p>
            Ho sviluppato una logica in Java per un sistema di accesso tramite
            impronta digitale, pensato per l’apertura automatizzata di un
            tornello in palestra.
          </p>
        </div>
      </div>
    </section>
  );
}
