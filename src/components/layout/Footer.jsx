import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Luciano Cretella<span>Progettato e sviluppato con cura.</span></p>
      <div className="footer-links">
        <a href={profile.contacts.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
        <a href={profile.contacts.email}>Email <ArrowUpRight size={13} aria-hidden="true" /></a>
        <a href={profile.project.url} target="_blank" rel="noopener noreferrer">Luto Atelier <ArrowUpRight size={13} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
