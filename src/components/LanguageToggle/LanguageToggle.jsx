import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";
import "../../../public/lightMode.css";
import "../../../public/darkMode.css";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="languageToggle">
      <select
        id="language-select"
        value={i18n.language}
        onChange={handleLanguageChange}
      >
        <option value="br">PT-BR</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}

export default LanguageToggle;
