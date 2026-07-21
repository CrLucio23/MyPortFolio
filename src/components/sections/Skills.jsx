import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="skills-panel">
        <p className="section-label">Interessi & competenze</p>
        <h2>Gli strumenti con cui do forma alle idee.</h2>
        <div className="skills-list">
          {profile.skills.map((skill, index) => (
            <motion.span key={skill} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.35 }} className="skill-pill">
              <span>{String(index + 1).padStart(2, "0")}</span>{skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
