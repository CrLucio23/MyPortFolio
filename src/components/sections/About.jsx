import { ArrowUpRight, Asterisk } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageProvider";
import ProfileSidebar from "../layout/ProfileSidebar";
import Reveal from "../ui/Reveal";

export default function About({ compact = false }) {
  const { copy, localPath } = useLanguage();
  const Heading = compact ? "h2" : "h1";
  return (
    <section
      className={`section about-section ${compact ? "about-compact" : "page-section"}`}
      aria-labelledby="about-title"
    >
      <Reveal className="about-heading">
        <p className="eyebrow">
          {compact ? copy.about.label : copy.about.pageLabel}
        </p>
        <Heading id="about-title">
          {copy.about.title}
          <em>{copy.about.accent}</em>
        </Heading>
      </Reveal>
      <div className={`about-grid ${compact ? "" : "about-grid-full"}`}>
        {!compact && (
          <Reveal>
            <ProfileSidebar />
          </Reveal>
        )}
        <Reveal className="about-story">
          <div className="about-introduction">
            <Asterisk
              className="about-asterisk"
              size={38}
              weight="thin"
              aria-hidden="true"
            />
            <p>{copy.about.intro}</p>
            <p className="creator-note">
              {copy.about.note}{" "}
              <a href={profile.project.url} target="_blank" rel="noreferrer">
                Luto Atelier
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only"> ({copy.common.newTab})</span>
              </a>
              {copy.about.noteEnd}
            </p>
            {compact && (
              <Link className="text-link" to={localPath("/about")}>
                {copy.about.more}
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            )}
          </div>
          {!compact && <Journey items={copy.about.journey} />}
        </Reveal>
        {compact && (
          <Reveal delay={0.08}>
            <Journey items={copy.about.journey} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Journey({ items }) {
  return (
    <ol className="journey-list">
      {items.map((item, index) => (
        <li key={index}>
          <span className="journey-index" aria-hidden="true">
            0{index + 1}
          </span>
          <div>
            <p className="eyebrow">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
