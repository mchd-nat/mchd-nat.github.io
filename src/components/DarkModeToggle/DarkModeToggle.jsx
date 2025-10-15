import "./DarkModeToggle.css";
import { useTranslation } from "react-i18next";

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  const { t } = useTranslation();

  return (
    <section className="darkModeControl">
      <button aria-label={t("toggle mode")} onClick={toggleDarkMode}>
        {!darkMode ? (
          <i id="moon_icon" className="iconsax" icon-name="moon"></i>
        ) : (
          <i id="sun_icon" className="iconsax" icon-name="sun"></i>
        )}
      </button>
    </section>
  );
}

export default DarkModeToggle;
