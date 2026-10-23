import { Browsers, Code, PencilSimpleLine } from "@phosphor-icons/react";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../ui/Reveal";

const icons = [Browsers, Code, PencilSimpleLine];

export default function Skills() {
  const { copy } = useLanguage();
  return (
    <section className="section skills-section" aria-labelledby="skills-title">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">{copy.skills.label}</p>
          <h2 id="skills-title">
            {copy.skills.title}
            <em>{copy.skills.accent}</em>
          </h2>
        </div>
        <p className="section-intro">{copy.skills.intro}</p>
      </Reveal>
      <div className="skills-list">
        {copy.skills.items.map((skill, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={index} delay={index * 0.04}>
              <article className="skill-row">
                <span className="skill-icon">
                  <Icon size={28} weight="light" aria-hidden="true" />
                </span>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
                <ul
                  className="skill-tools"
                  aria-label={`${copy.skills.toolsLabel} ${skill.title}`}
                >
                  {skill.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
