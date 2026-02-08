import "./About.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function About() {
  const { t } = useTranslation();

  const darkMode = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });

  return (
    <section id="about">
      <h1>Natália Silva Machado</h1>
      <p className="dev">{t("roles")}</p>
      <section className="menu links">
        <ul>
          <li>
            <a href="https://github.com/mchd-nat" target="_blank">
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
        </ul>
      </section>
      <section>
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
          <img
            src="https://mchd-nat.github.io/dart-plain.svg"
            alt="Dart logo"
          />
          <img
            src={
              darkMode
                ? "https://mchd-nat.github.io/rust-white.svg"
                : "https://mchd-nat.github.io/rust.svg"
            }
            alt="Rust logo"
          />
          <div className="divider"></div>
          <img
            src="https://mchd-nat.github.io/flutter-plain.svg"
            alt="Flutter logo"
          />
          <img
            src="https://mchd-nat.github.io/vuejs-original.svg"
            alt="Vue.js logo"
          />
          <img
            src="https://mchd-nat.github.io/react-original.svg"
            alt="React logo"
          />
        </div>
      </section>
    </section>
  );
}

export default About;
