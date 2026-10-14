import { ArrowDownToLine, ArrowUpRight, MapPin } from "lucide-react";
import profileImg from "../../assets/profile.jpg";
import { profile } from "../../data/profile";

export default function ProfileSidebar() {
  return (
    <aside className="profile-sidebar" aria-label="Profilo personale">
      <img src={profileImg} alt="Luciano Cretella" className="profile-avatar" width="1600" height="1550" />
      <div className="profile-intro"><h2>{profile.name}</h2><p>{profile.role}</p><span className="profile-location"><MapPin size={14} aria-hidden="true" /> Italia</span></div>
      <dl className="profile-facts">
        <div><dt>Formazione</dt><dd>Informatica L-31</dd></div>
        <div><dt>Lingue</dt><dd>Italiano · Inglese</dd></div>
        <div><dt>Progetto</dt><dd><a href={profile.project.url} target="_blank" rel="noopener noreferrer">Luto Atelier <ArrowUpRight size={12} aria-hidden="true" /></a></dd></div>
      </dl>
      <a className="sidebar-cv" href={profile.curriculum} download="Curriculum_Luciano_Cretella.pdf">Scarica il curriculum <ArrowDownToLine size={16} aria-hidden="true" /></a>
    </aside>
  );
}
