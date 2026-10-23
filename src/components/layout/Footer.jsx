import { ArrowUp, ArrowUpRight } from "@phosphor-icons/react";
import { useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageProvider";

export default function Footer() {
  const { copy, localPath } = useLanguage();
  const reduced = useReducedMotion();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="footer-signature" to={localPath("/")}>
          Luciano Cretella<span>{copy.footer.note}</span>
        </Link>
        <button
          className="back-top"
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduced ? "instant" : "smooth",
            })
          }
        >
          {copy.footer.top}
          <span>
            <ArrowUp size={20} aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}
          <span>{copy.footer.credit}</span>
        </p>
        <div className="footer-links">
          <a href={profile.contacts.github} target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only"> ({copy.common.newTab})</span>
          </a>
          <a href={profile.contacts.email}>
            Email
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={profile.project.url} target="_blank" rel="noreferrer">
            Luto Atelier
            <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only"> ({copy.common.newTab})</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
