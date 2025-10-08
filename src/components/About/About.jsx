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
            <a href="https://github.com/nataliasilvamachado" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nat%C3%A1lia-s-518478243/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          {/*<li>
            <a href="" target="_blank">
              Email
            </a>
          </li>*/}
        </ul>
      </section>
      <section>
        <div className="languages">
          <img
            src="https://nataliasilvamachado.github.io/nataliasilvamachado/html5-plain.svg"
            alt="HTML5 logo"
          />
          <img
            src="https://nataliasilvamachado.github.io/nataliasilvamachado/css3-plain.svg"
            alt="CSS3 logo"
          />
          <img
            src="https://nataliasilvamachado.github.io/nataliasilvamachado/javascript-plain.svg"
            alt="JavaScript logo "
          />
          <img
            src="https://nataliasilvamachado.github.io/nataliasilvamachado/dart-plain.svg"
            alt="Dart logo"
          />
          <div className="divider"></div>
          <img
            src="https://nataliasilvamachado.github.io/nataliasilvamachado/flutter-plain.svg"
            alt="Flutter logo"
          />
          <img
            src="https://nataliasilvamachado.github.io/nataliasilvamachado/vuejs-original.svg"
            alt="Vue.js logo"
          />
          <img
            src="https://nataliasilvamachado.github.io/nataliasilvamachado/react-original.svg"
            alt="React logo"
          />
        </div>
      </section>
    </section>
  );
}

export default About;
