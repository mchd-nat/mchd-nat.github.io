import '../../styles/App.css'
import About from '../About/About.jsx'
import PostPreview from '../PostPreview/PostPreview.jsx';
import Publications from '../Publications/Publications.jsx';
import './TabContent.css'

function TabContent(props) {
    if (props.activeTab == 0) {
        return <About />
    } else if (props.activeTab == 1) {
        return <section id="portfolio">
            <h1>Portfolio</h1>
        </section>
    } else if (props.activeTab == 2) {
        return <section id="publicacoes">
            <Publications />
        </section>
    } else if (props.activeTab == 3) {
        return <PostPreview />
    }
}

export default TabContent