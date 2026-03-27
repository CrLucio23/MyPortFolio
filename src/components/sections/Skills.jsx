import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="container section-block">
      <div className="glass-card">
        <p className="section-label">Interessi & competenze</p>
        <h2>Le aree che mi rappresentano.</h2>

        <div className="skills-list">
          {profile.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className="skill-pill"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
