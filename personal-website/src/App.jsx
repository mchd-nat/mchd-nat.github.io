import './styles/App.css'
import './styles/light_mode.css'
import TabContent from './components/TabContent.jsx'
import Tabs from './components/Tabs/Tabs.jsx'
import React, { useState } from 'react';

function App() {
  const [activeTab, setTabActive] = useState(0);

  const displayTab = (index) => {
    setTabActive(index); 
  };

  return (
    <>
      <button id="darkmode_toggle">
        <i id="moon_icon" className="iconsax" icon-name="moon"></i>
        <i id="sun_icon" className="iconsax" icon-name="sun"></i>
      </button>
      <section className="menu header">
        <Tabs onClick={displayTab} title="Sobre" index={0} activeTab={activeTab} />
        <Tabs onClick={displayTab} title="Portfólio" index={1} activeTab={activeTab} />
        <Tabs onClick={displayTab} title="Outro" index={2} activeTab={activeTab} />
      </section>
      <TabContent activeTab={activeTab} />
    </>
  )
}

export default App
