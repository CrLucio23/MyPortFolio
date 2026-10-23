import { DownloadSimple, MapPin } from "@phosphor-icons/react";
import photo from "../../assets/profile.jpg";
import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageProvider";
import ActionLink from "../ui/ActionLink";

export default function ProfileSidebar() {
  const { copy } = useLanguage();
  return (
    <aside className="profile-card" aria-label={copy.about.profileLabel}>
      <div className="profile-card-image">
        <img
          src={photo}
          alt={copy.common.portrait}
          width="1600"
          height="1550"
        />
      </div>
      <div className="profile-card-content">
        <p className="profile-name">{profile.name}</p>
        <p className="profile-role">{copy.about.role}</p>
        <p className="profile-location">
          <MapPin size={16} aria-hidden="true" />
          {copy.common.italy}
        </p>
        <dl>
          <div>
            <dt>{copy.about.education}</dt>
            <dd>{copy.about.degree}</dd>
          </div>
          <div>
            <dt>{copy.about.languages}</dt>
            <dd>{copy.about.spoken}</dd>
          </div>
          <div>
            <dt>{copy.about.project}</dt>
            <dd>
              <a href={profile.project.url} target="_blank" rel="noreferrer">
                Luto Atelier
                <span className="sr-only"> ({copy.common.newTab})</span>
              </a>
            </dd>
          </div>
        </dl>
        <ActionLink
          className="btn-primary"
          href={profile.curriculum}
          download
          icon={DownloadSimple}
        >
          {copy.common.cv}
        </ActionLink>
        <span className="file-caption">{copy.common.cvFormat}</span>
      </div>
    </aside>
  );
}
