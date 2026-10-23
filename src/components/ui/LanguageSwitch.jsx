import { useLanguage } from "../../i18n/LanguageProvider";
import { languages } from "../../i18n/messages";

export default function LanguageSwitch() {
  const { language, copy, changeLanguage } = useLanguage();
  return (
    <div
      className="language-switch"
      role="group"
      aria-label={copy.language.label}
    >
      {languages.map(({ code, name, short }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={name}
          aria-pressed={language === code}
          onClick={() => changeLanguage(code)}
        >
          {short}
        </button>
      ))}
    </div>
  );
}
