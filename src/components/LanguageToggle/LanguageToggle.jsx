import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";
import i18n from "../../i18n/i18n";

function LanguageToggle() {
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="languageToggle">
      <select
        id="language_select"
        aria-label={t("select language")}
        name="language_select"
        value={t.language}
        onChange={handleLanguageChange}
      >
        <option value="br">PT-BR</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}

export default LanguageToggle;
