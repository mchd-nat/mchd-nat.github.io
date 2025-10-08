import "./About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h1>Natália Silva Machado</h1>
      <p className="dev">{t("roles")}</p>
      <section className="menu links">
        <ul>
          <li>
            <a href="https://github.com/natsmachado" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Email
            </a>
          </li>
        </ul>
      </section>
      <section>
        <div className="languages">
          <img src="dist\html5-plain.svg" alt="HTML5 logo" />
          <img src="dist\css3-plain.svg" alt="CSS3 logo" />
          <img src="dist\javascript-plain.svg" alt="JavaScript logo " />
          <img src="dist\dart-plain.svg" alt="Dart logo" />
          <div className="divider"></div>
          <img src="dist\flutter-plain.svg" alt="Flutter logo" />
          <img src="dist\vuejs-original.svg" alt="Vue.js logo" />
          <img src="dist\react-original.svg" alt="React logo" />
        </div>
      </section>
    </section>
  );
}

export default About;
