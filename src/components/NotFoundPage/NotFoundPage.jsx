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
    <div>
      <h1>{t("404 error")}</h1>
      <a href="/">{t("go to home")}</a>
    </div>
  );
}

export default NotFoundPage;
