import "./styles/App.css";
import TabContent from "./components/TabContent/TabContent.jsx";
import Tabs from "./components/Tabs/Tabs.jsx";
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PostPreview from "./components/PostPreview/PostPreview.jsx";
import PostPage from "./components/PostPage/PostPage.jsx";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle.jsx";
import "./styles/Responsive.css";
import { useTranslation } from "react-i18next";
import "./i18n/i18n.jsx";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle.jsx";

function App() {
  const { t } = useTranslation();

  <Router>
    <Routes>
      <Route path="/" element={<PostPreview />} />
      <Route
        path="https://natsmachado.github.io/natsmachado/posts/:postTitle"
        element={<PostPage />}
      />
    </Routes>
  </Router>;

  const [activeTab, setTabActive] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });

  const displayTab = (index) => {
    setTabActive(index);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkMode", newValue);
      return newValue;
    });
  };

  return (
    <Router basename="/">
      <Routes>
        <Route
          path="https://natsmachado.github.io/natsmachado/posts/:postTitle"
          element={<PostPage />}
        />
        <Route
          path="/"
          element={
            <>
              <div className="controls">
                <LanguageToggle />
                <DarkModeToggle
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              </div>

              <link
                rel="stylesheet"
                type="text/css"
                href={
                  darkMode
                    ? "https://natsmachado.github.io/natsmachado/darkMode.css"
                    : "https://natsmachado.github.io/natsmachado/lightMode.css"
                }
              />

              <section className="menu header">
                <Tabs
                  onClick={displayTab}
                  title={t("about")}
                  index={0}
                  activeTab={activeTab}
                />
                {/*<Tabs
                  onClick={displayTab}
                  title={t("portfolio")}
                  index={1}
                  activeTab={activeTab}
                />*/}
                <Tabs
                  onClick={displayTab}
                  title={t("publications")}
                  index={2}
                  activeTab={activeTab}
                />
                <Tabs
                  onClick={displayTab}
                  title={t("blog")}
                  index={3}
                  activeTab={activeTab}
                />
              </section>
              <TabContent activeTab={activeTab} />
              <footer>
                <p className="copyright">
                  Copyright © 2025 by Natália Silva Machado
                </p>
                <p className="copyright">Powered by React</p>
              </footer>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
