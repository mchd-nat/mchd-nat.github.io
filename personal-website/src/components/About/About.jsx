import './About.css'

function About() {
    return <section id="about">
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
                <img src={"../../public/html5-plain.svg"} />
                <img src="../../public/css3-plain.svg" />
                <img src="../../public/javascript-plain.svg" />
                <img src="../../public/dart-plain.svg" />
                <div className="divider"></div>
                <img src="../../public/flutter-plain.svg" />
                <img src="../../public/vuejs-original.svg" />
                <img src="../../public/react-original.svg" />
            </div>
        </section>
    </section>
}

export default About
