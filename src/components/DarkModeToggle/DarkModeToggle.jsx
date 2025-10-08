import "./DarkModeToggle.css";

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <section className="darkModeControl">
      <button onClick={toggleDarkMode}>
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
