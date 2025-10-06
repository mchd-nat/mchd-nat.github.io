import '../App.css'
import About from './About'

function TabContent(props) {
    if (props.activeTab == 0) {
        return <About />
    } else if (props.activeTab == 1) {
        return <section id="portfolio">
            <h1>Portfolio</h1>
        </section>
    } else if (props.activeTab == 2) {
        return <section id="other">
            <h1>Other</h1>
        </section>
    } 
}

export default TabContent