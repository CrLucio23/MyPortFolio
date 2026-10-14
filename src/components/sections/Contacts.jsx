import { ArrowUpRight, Github, Instagram, Mail, Phone } from "lucide-react";
import { profile } from "../../data/profile";

const contacts = [
  { label: "GitHub", detail: "Codice, progetti ed esperimenti", href: profile.contacts.github, icon: Github },
  { label: "Instagram", detail: "Un lato più personale", href: profile.contacts.instagram, icon: Instagram },
  { label: "WhatsApp", detail: "Una conversazione diretta", href: profile.contacts.whatsapp, icon: Phone },
];

export default function Contacts() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <p className="section-label">Restiamo in contatto</p>
      <h1 id="contact-heading">Le belle idee iniziano<br />con un <em>ciao.</em></h1>
      <p className="contacts-text">Un progetto da sviluppare, un’opportunità o un’idea da condividere? Mi fa piacere parlarne. Scegli il canale che preferisci.</p>
      <a className="contact-email" href={profile.contacts.email}>
        <span><Mail size={23} strokeWidth={1.5} aria-hidden="true" /><span><small>Scrivimi un’email</small><strong>{profile.contacts.email.replace("mailto:", "")}</strong></span></span>
        <ArrowUpRight size={28} strokeWidth={1.5} aria-hidden="true" />
      </a>
      <div className="contacts-grid">
        {contacts.map(({ label, detail, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-card"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><span><strong>{label}</strong><small>{detail}</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>)}
      </div>
      <p className="contact-note"><span className="status-dot" /> Aperto a nuove opportunità e collaborazioni.</p>
    </section>
  );
}
