import './styles/App.css'
import TabContent from './components/TabContent.jsx'
import Tabs from './components/Tabs/Tabs.jsx'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostPreview from './components/PostPreview/PostPreview.jsx';
import PostPage from './components/PostPage/PostPage.jsx';

function App() {
  <Router>
    <Routes>
        <Route path="/" element={<PostPreview />} />
        <Route path="/posts/:postTitle" element={<PostPage />} />
    </Routes>
  </Router>

  const [activeTab, setTabActive] = useState(0);
  const [darkMode, setDarkMode] = useState((false));

  const displayTab = (index) => {
    setTabActive(index); 
  }; 

  return (
    <Router>
      <Routes>
        <Route path="/posts/:postTitle" element={<PostPage />} />
        <Route 
          path="/"
          element={
            <>
              <section className="darkModeControl">
                <button onClick={() => {setDarkMode(!darkMode)}}>
                  <i id="moon_icon" className="iconsax" icon-name="moon"></i>
                  <i id="sun_icon" className="iconsax" icon-name="sun"></i>
                </button>
              </section>
              <link rel="stylesheet" href={darkMode ? "/darkMode.css" : "/lightMode.css"} />
              <section className="menu header">
                <Tabs onClick={displayTab} title="Sobre" index={0} activeTab={activeTab} />
                <Tabs onClick={displayTab} title="Portfólio" index={1} activeTab={activeTab} />
                <Tabs onClick={displayTab} title="Publicações" index={2} activeTab={activeTab} />
                <Tabs onClick={displayTab} title="Blog" index={3} activeTab={activeTab} />
              </section>
              <TabContent activeTab={activeTab} />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
