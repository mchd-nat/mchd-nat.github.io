import "./Projects.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <a href="#" target="_blank" className="card">
        <h1>Data-Sniffing Caramelo</h1>
        <h2>{t("project 1 blurb")}</h2>
        <div className="languages">
          <img
            src="https://mchd-nat.github.io/html5-plain.svg"
            alt="HTML5 logo"
          />
          <img
            src="https://mchd-nat.github.io/css3-plain.svg"
            alt="CSS3 logo"
          />
          <img
            src="https://mchd-nat.github.io/javascript-plain.svg"
            alt="JavaScript logo "
          />
          <img src="https://mchd-nat.github.io/rust.svg" alt="Rust logo " />
        </div>
        <p>
          <span>https://data-sniffingcaramelo.onrender.com/</span>
        </p>
      </a>
    </>
  );
}

export default Projects;
