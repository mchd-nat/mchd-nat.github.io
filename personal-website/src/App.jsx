import './styles/App.css'
import TabContent from './components/TabContent.jsx'
import Tabs from './components/Tabs/Tabs.jsx'
import React, { useState } from 'react';

function App() {
  const [activeTab, setTabActive] = useState(0);
  const [darkMode, setDarkMode] = useState((false));

  const displayTab = (index) => {
    setTabActive(index); 
  }; 

  return (
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
  )
}

export default App
