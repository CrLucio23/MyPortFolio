import {
  ArrowUpRight,
  GithubLogo,
  InstagramLogo,
  WhatsappLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../ui/Reveal";

export default function Contacts() {
  const { copy } = useLanguage();
  const socials = [
    { name: "GitHub", key: "github", Icon: GithubLogo },
    { name: "Instagram", key: "instagram", Icon: InstagramLogo },
    { name: "WhatsApp", key: "whatsapp", Icon: WhatsappLogo },
  ];
  return (
    <section
      className="section page-section contacts-section"
      aria-labelledby="contact-title"
    >
      <Reveal className="contact-heading">
        <p className="eyebrow">{copy.contact.label}</p>
        <h1 id="contact-title">
          {copy.contact.title}
          <em>{copy.contact.accent}</em>
        </h1>
        <p className="contact-intro">{copy.contact.intro}</p>
      </Reveal>
      <div className="contact-grid">
        <Reveal>
          <a className="email-card" href={profile.contacts.email}>
            <span className="email-icon">
              <EnvelopeSimple size={32} weight="light" aria-hidden="true" />
            </span>
            <span className="eyebrow">{copy.contact.email}</span>
            <span className="email-address">
              lcretella23
              <wbr />
              @gmail.com
            </span>
            <span className="email-card-bottom">
              {copy.contact.emailAction}
              <span>
                <ArrowUpRight size={26} aria-hidden="true" />
              </span>
            </span>
          </a>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="eyebrow social-heading">{copy.contact.elsewhere}</p>
          <ul className="social-list">
            {socials.map(({ name, key, Icon }) => (
              <li key={key}>
                <a
                  href={profile.contacts[key]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={26} weight="light" aria-hidden="true" />
                  <span>
                    <strong>{name}</strong>
                    <small>{copy.contact[key]}</small>
                    <span className="sr-only"> ({copy.common.newTab})</span>
                  </span>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Reveal>
        <p className="availability">
          <span className="status-dot" />
          {copy.contact.note}
        </p>
      </Reveal>
    </section>
  );
}
