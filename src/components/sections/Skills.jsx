import { Code2, PanelsTopLeft, Braces } from "lucide-react";

const skills = [
  { icon: PanelsTopLeft, title: "Interfacce web", text: "Strutture chiare, layout responsive e attenzione ai dettagli che rendono un sito piacevole da usare.", tools: ["HTML & CSS", "Web design"] },
  { icon: Code2, title: "Sviluppo & logica", text: "Dal ragionamento al codice: costruire funzionalità, risolvere problemi e continuare a sperimentare.", tools: ["JavaScript", "Java"] },
  { icon: Braces, title: "Gestione dei contenuti", text: "Esperienza pratica nella manutenzione di siti e nella gestione di contenuti e strumenti digitali.", tools: ["WordPress", "Supporto web"] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="section-heading"><div><p className="section-label">Competenze & strumenti</p><h2 id="skills-heading">Gli strumenti. <em>Il metodo.</em></h2></div><p>Una base solida,<br />la voglia di andare oltre.</p></div>
      <div className="skills-list">
        {skills.map(({ icon: Icon, title, text, tools }) => (
          <article className="skill-item" key={title}>
            <Icon size={24} strokeWidth={1.4} aria-hidden="true" />
            <h3>{title}</h3><p>{text}</p>
            <ul className="skill-tags" aria-label={`Strumenti per ${title.toLowerCase()}`}>{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
