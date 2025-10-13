import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./NotFoundPage.css";
import "../../../public/darkMode.css";

function NotFoundPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Oops";
  });

  return (
    <div className="not_found">
      <h1 className="not_found">{t("404 error")}</h1>
      <a className="not_found" href="/">
        {t("go to home")}
      </a>
    </div>
  );
}

export default NotFoundPage;
