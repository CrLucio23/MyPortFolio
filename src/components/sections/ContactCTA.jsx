import { Asterisk } from "@phosphor-icons/react";
import { useLanguage } from "../../i18n/LanguageProvider";
import ActionLink from "../ui/ActionLink";
import Reveal from "../ui/Reveal";

export default function ContactCTA() {
  const { copy, localPath } = useLanguage();
  return (
    <Reveal className="cta-wrap">
      <section className="contact-cta" aria-labelledby="cta-title">
        <div>
          <p className="eyebrow">{copy.cta.label}</p>
          <h2 id="cta-title">
            {copy.cta.title}
            <em>{copy.cta.accent}</em>
          </h2>
          <p className="cta-note">{copy.cta.note}</p>
        </div>
        <div className="cta-action">
          <Asterisk size={74} weight="thin" aria-hidden="true" />
          <ActionLink className="btn-light" to={localPath("/contact")}>
            {copy.cta.button}
          </ActionLink>
        </div>
      </section>
    </Reveal>
  );
}
