import { motion } from "framer-motion";
import { Github, Instagram, Mail, Phone } from "lucide-react";
import { profile } from "../../data/profile";

const contacts = [
  {
    label: "Gmail",
    href: profile.contacts.email,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: profile.contacts.github,
    icon: Github,
  },
  {
    label: "Instagram",
    href: profile.contacts.instagram,
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: profile.contacts.whatsapp,
    icon: Phone,
  },
];

export default function Contacts() {
  return (
    <section id="contact" className="container section-block">
      <div className="glass-card">
        <p className="section-label">Contatti</p>
        <h2>Rimaniamo in contatto.</h2>
        <p className="contacts-text">
          Qui puoi inserire tutti i tuoi riferimenti: GitHub, Instagram, Gmail e WhatsApp.
        </p>

        <div className="contacts-grid">
          {contacts.map(({ label, href, icon: Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <Icon size={18} />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
