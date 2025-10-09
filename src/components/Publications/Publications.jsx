import publications from "../../publications.jsx";
import "./Publications.css";
import { useTranslation } from "react-i18next";

function Publications() {
  const { t } = useTranslation();

  return (
    <>
      {publications.map((pub) => (
        <a key={pub.url} href={pub.url} target="_blank" className="card">
          <h1>{pub.title}</h1>
          <h2>
            {t("publisher")} {pub.publisher}
          </h2>
          <p>
            <span>{pub.doi}</span>
          </p>
        </a>
      ))}
    </>
  );
}

export default Publications;
