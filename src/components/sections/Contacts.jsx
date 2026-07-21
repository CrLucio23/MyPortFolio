import { motion } from "framer-motion";
import { Github, Instagram, Mail, Phone } from "lucide-react";
import { profile } from "../../data/profile";

const contacts = [
  { label: "Gmail", detail: "Scrivimi una email", href: profile.contacts.email, icon: Mail },
  { label: "GitHub", detail: "Guarda il mio codice", href: profile.contacts.github, icon: Github },
  { label: "Instagram", detail: "Seguimi sui social", href: profile.contacts.instagram, icon: Instagram },
  { label: "WhatsApp", detail: "Parliamo direttamente", href: profile.contacts.whatsapp, icon: Phone },
];

export default function Contacts() {
  return (
    <section id="contact" className="section-block contact-section">
      <div className="contact-panel">
        <p className="section-label">Contatti</p>
        <h2>Parliamo del prossimo progetto.</h2>
        <p className="contacts-text">Per collaborazioni, progetti o semplicemente per parlare di tecnologia, scegli il canale che preferisci.</p>
        <div className="contacts-grid">
          {contacts.map(({ label, detail, href, icon: Icon }, index) => (
            <motion.a key={label} href={href} target="_blank" rel="noreferrer" className="contact-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.45 }}>
              <Icon size={20} strokeWidth={1.7} /><span><strong>{label}</strong><small>{detail}</small></span><i aria-hidden="true">↗</i>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
