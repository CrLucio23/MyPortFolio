import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import ProfileSidebar from "../layout/ProfileSidebar";

const journey = [
  { label: "Formazione", title: "La curiosità diventa metodo.", text: "Studio Informatica L-31 all’Università degli Studi di Salerno, dopo il diploma di Perito Informatico all’I.I.S. Antonio Pacinotti di Scafati." },
  { label: "Esperienza", title: "Uno sguardo oltre i confini.", text: "Quattro mesi di stage in Belgio presso Bravo Discovery: manutenzione di siti WordPress, gestione email e supporto in lingua inglese." },
  { label: "Progetti", title: "Imparare, poi mettere in pratica.", text: "Dalla logica Java per un sistema di accesso con impronta digitale e tornello automatizzato, alla creazione del sito Luto Atelier." },
];

export default function About({ compact = false }) {
  const Heading = compact ? "h2" : "h1";
  return (
    <section id="about" className={`about-section${compact ? " about-compact" : " about-full"}`} aria-labelledby="about-heading">
      <div className="about-heading">
        <p className="section-label">{compact ? "02 — Il mio percorso" : "Il mio percorso"}</p>
        <Heading id="about-heading">La curiosità è<br />il mio <em>punto di partenza.</em></Heading>
      </div>
      <div className="about-layout">
        {!compact && <ProfileSidebar />}
        <div className="about-story">
          <p className="about-intro">{profile.about}</p>
          {!compact && <p className="about-project-note">Sono il creatore di <a href={profile.project.url} target="_blank" rel="noopener noreferrer">{profile.project.domain} <ArrowUpRight size={14} aria-hidden="true" /></a>, il sito del progetto LuTo Flow.</p>}
          <div className="journey-list">
            {journey.slice(0, compact ? 2 : journey.length).map(({ label, title, text }, index) => (
              <article className="journey-item" key={label}>
                <span className="journey-index">0{index + 1}</span>
                <div><p className="journey-label">{label}</p><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          {compact && <Link to="/about" className="text-link">Conosci meglio il mio percorso <ArrowRight size={16} aria-hidden="true" /></Link>}
        </div>
      </div>
    </section>
  );
}
