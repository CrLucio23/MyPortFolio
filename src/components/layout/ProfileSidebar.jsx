import profileImg from "../../assets/profile.jpg";
import { profile } from "../../data/profile";

const skillLevels = [
  { label: "Java", value: 78 },
  { label: "HTML & CSS", value: 86 },
  { label: "JavaScript", value: 72 },
  { label: "WordPress", value: 76 },
];

export default function ProfileSidebar() {
  return (
    <aside className="profile-sidebar" aria-label="Profilo personale">
      <div className="profile-intro">
        <div className="profile-avatar-wrap">
          <img src={profileImg} alt="Luciano Cretella" className="profile-avatar" />
          <span className="availability-dot" aria-label="Disponibile a nuove opportunità" />
        </div>
        <h2>{profile.name}</h2>
        <p>{profile.role}</p>
      </div>

      <div className="profile-facts">
        <p><span>Residenza</span><strong>Italia</strong></p>
        <p><span>Formazione</span><strong>Informatica L-31</strong></p>
        <p><span>Lingue</span><strong>Italiano · Inglese</strong></p>
      </div>

      <div className="skill-bars" aria-label="Competenze principali">
        {skillLevels.map(({ label, value }) => (
          <div className="skill-meter" key={label}>
            <div className="skill-meter-label"><span>{label}</span><span>{value}%</span></div>
            <div className="skill-meter-track"><span style={{ "--skill-level": `${value}%` }} /></div>
          </div>
        ))}
      </div>

      <a className="sidebar-cv" href={profile.curriculum} download="Curriculum_Luciano_Cretella.pdf">
        Scarica il Curriculum <span aria-hidden="true">PDF</span>
      </a>
    </aside>
  );
}
