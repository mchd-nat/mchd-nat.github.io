import './App.css'

function App() {
  return (
    <>
      <button onclick="toggleTheme()" id="darkmode_toggle">
        <i id="moon_icon" className="iconsax" icon-name="moon"></i>
      </button>
      <button onclick="toggleTheme()" id="darkmode_toggle">
        <i id="sun_icon" claclassNamess="iconsax" icon-name="sun"></i>
      </button>
      <section className="menu header">
        <ul>
          <li><button id="aboutTag" className="active">Sobre</button></li>
          <li><button id="portfolioTag">Portfólio</button></li>
          <li><button id="otherTag">Outro</button></li>
        </ul>
      </section>
      <section id="about">
        <h1>Natália Silva Machado</h1>
        <p>Desenvolvedora front-end & mobile</p>
        <section className="menu links">
          <ul>
            <li><a href="https://github.com/natsmachado">GitHub</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="">Email</a></li>
          </ul>
        </section>
        <section>
          <div className="languages">
            <img src="./img/html5-plain.svg" />
            <img src="./img/css3-plain.svg" />
            <img src="./img/javascript-plain.svg" />
            <img src="./img/typescript-plain.svg" />
            <img src="./img/dart-plain.svg" />
            <img src="./img/python-plain.svg" />
          </div>
          <div className="frameworks">
            <img src="./img/flutter-plain.svg" />
            <img src="./img/vuejs-original.svg" />
            <img src="./img/react-original.svg" />
            <img src="./img/angular-original.svg" />
          </div>
        </section>
      </section>
      <section id="portfolio">
        <h1>Portfolio</h1>
      </section>
      <section id="other">
        <h1>Other</h1>
      </section>
    </>
  )
}

export default App
