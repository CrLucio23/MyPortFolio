import { ArrowUpRight, Circle } from "@phosphor-icons/react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageProvider";
import ActionLink from "../ui/ActionLink";
import Reveal from "../ui/Reveal";

export default function FeaturedProject() {
  const { copy } = useLanguage();
  return (
    <section
      className="section featured-project"
      id="projects"
      aria-labelledby="project-title"
    >
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">{copy.project.label}</p>
          <h2 id="project-title">
            {copy.project.title}
            <em>{copy.project.accent}</em>
          </h2>
        </div>
        <p className="section-intro">{copy.project.intro}</p>
      </Reveal>
      <Reveal>
        <article className="project-card">
          <a
            className="project-canvas"
            href={profile.project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${copy.project.preview} (${copy.common.newTab})`}
          >
            <div className="canvas-topline">
              <span>{copy.project.previewLabel}</span>
              <span className="live-badge">
                <span className="status-dot" />
                {copy.project.live}
              </span>
            </div>
            <div className="browser-frame">
              <div className="browser-toolbar" aria-hidden="true">
                <span className="browser-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>lutoatelier.it</span>
                <Circle size={12} />
              </div>
              <img
                src="/images/luto-dashboard.png"
                alt={copy.project.imageAlt}
                width="1440"
                height="940"
                loading="lazy"
              />
            </div>
            <div className="canvas-caption">
              <span>{copy.project.canvasLabel}</span>
              <span className="canvas-arrow">
                <ArrowUpRight size={26} aria-hidden="true" />
              </span>
            </div>
          </a>
          <div className="project-content">
            <p className="eyebrow">{copy.project.category}</p>
            <h3>
              {profile.project.name}
              <span aria-hidden="true">↗</span>
            </h3>
            <p className="project-subtitle">{copy.project.subtitle}</p>
            <p className="project-description">{copy.project.description}</p>
            <dl className="project-details">
              <div>
                <dt>{copy.project.roleLabel}</dt>
                <dd>{copy.project.role}</dd>
              </div>
              <div>
                <dt>{copy.project.scopeLabel}</dt>
                <dd>{copy.project.scope}</dd>
              </div>
            </dl>
            <ActionLink
              className="btn-primary"
              href={profile.project.url}
              target="_blank"
              rel="noreferrer"
            >
              {copy.project.visit}
              <span className="sr-only"> ({copy.common.newTab})</span>
            </ActionLink>
          </div>
        </article>
      </Reveal>
      <p className="project-footnote">
        <span>{copy.project.previewCaption}</span>
        <span>{copy.project.imageNote}</span>
      </p>
    </section>
  );
}
