import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";

export default function FeaturedProject() {
  const { project } = profile;
  return (
    <section id="projects" className="project-section" aria-labelledby="project-heading">
      <div className="section-heading">
        <div><p className="section-label">01 — Progetto in evidenza</p><h2 id="project-heading">Dalle idee, <em>al web.</em></h2></div>
        <p>Un progetto reale.<br />Il mio modo di mettermi in gioco.</p>
      </div>
      <article className="featured-project">
        <a className="project-preview" href={project.url} target="_blank" rel="noopener noreferrer" aria-label="Visita Luto Atelier, sito di LuTo Flow (si apre in una nuova scheda)">
          <div className="project-preview-top"><span>LuTo Flow</span><span>Il digitale, pensato con cura.</span></div>
          <div className="browser-preview">
            <div className="browser-bar"><span className="browser-dots" aria-hidden="true"><i /><i /><i /></span><span>lutoatelier.it</span><ArrowUpRight size={12} aria-hidden="true" /></div>
            <img src="/images/luto-dashboard.png" alt="Anteprima del gestionale LuTo Flow presentato su Luto Atelier, con lavori, appuntamenti e attività" width="1440" height="940" loading="lazy" />
          </div>
          <span className="preview-link">Esplora il progetto <ArrowUpRight size={17} aria-hidden="true" /></span>
        </a>
        <div className="project-details">
          <div className="project-kicker"><span className="status-dot" /> Sito online<span className="project-number">/ 01</span></div>
          <h3>{project.name}<span>Il progetto LuTo Flow</span></h3>
          <p>{project.description}</p>
          <dl className="project-meta"><div><dt>Il mio ruolo</dt><dd>{project.role}</dd></div><div><dt>Ambito</dt><dd>Web · Esperienza digitale</dd></div></dl>
          <a className="project-visit" href={project.url} target="_blank" rel="noopener noreferrer">Visita {project.domain}<ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
      </article>
    </section>
  );
}
