import {
  ArrowDownRight,
  DownloadSimple,
  Asterisk,
} from "@phosphor-icons/react";
import photo from "../../assets/profile.jpg";
import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../ui/Reveal";
import ActionLink from "../ui/ActionLink";

export default function Hero() {
  const { copy, localPath } = useLanguage();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            {copy.hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {copy.hero.title}
            <em>{copy.hero.accent}</em>
          </h1>
          <p className="hero-intro">
            {copy.hero.intro} <strong>{profile.name}.</strong>
          </p>
          <p className="hero-description">{copy.hero.description}</p>
          <div className="hero-actions">
            <ActionLink
              to={localPath("/#projects")}
              className="btn-primary"
              icon={ArrowDownRight}
            >
              {copy.hero.projects}
            </ActionLink>
            <a className="download-link" href={profile.curriculum} download>
              <DownloadSimple size={21} aria-hidden="true" />
              <span>
                {copy.common.cv}
                <small>{copy.common.cvFormat}</small>
              </span>
            </a>
          </div>
        </Reveal>
        <Reveal className="portrait-composition" delay={0.12}>
          <div className="portrait-topline">
            <span>{copy.hero.portraitLabel}</span>
            <span aria-hidden="true">01 — LC</span>
          </div>
          <div className="portrait-frame">
            <div className="portrait-photo">
              <img
                src={photo}
                alt={copy.common.portrait}
                width="1600"
                height="1550"
                fetchPriority="high"
              />
              <div className="portrait-tag">
                <Asterisk size={18} aria-hidden="true" />
                {copy.hero.portraitTag}
              </div>
              <p className="portrait-signature">{copy.hero.signature}</p>
            </div>
            <div className="portrait-bottomline">
              <span>{copy.hero.portraitNote}</span>
              <ArrowDownRight size={22} aria-hidden="true" />
            </div>
          </div>
          <span className="portrait-mark" aria-hidden="true">
            <Asterisk size={64} weight="thin" />
          </span>
        </Reveal>
      </div>
      <Reveal>
        <dl className="hero-facts" aria-label={copy.hero.factsLabel}>
          {copy.hero.facts.map((fact, index) => (
            <div key={index}>
              <dt>
                <span className="fact-number" aria-hidden="true">
                  0{index + 1}
                </span>
                {fact.label}
              </dt>
              <dd>
                {index === 2 ? (
                  <a
                    href={profile.project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {fact.title}
                    <span className="sr-only"> ({copy.common.newTab})</span>
                  </a>
                ) : (
                  fact.title
                )}
                <small>{fact.detail}</small>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
