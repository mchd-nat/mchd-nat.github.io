import '..//styles/App.css'
import About from './About/About.jsx'
import PostPreview from './PostPreview/PostPreview.jsx';

function TabContent(props) {
    if (props.activeTab == 0) {
        return <About />
    } else if (props.activeTab == 1) {
        return <section id="portfolio">
            <h1>Portfolio</h1>
        </section>
    } else if (props.activeTab == 2) {
        <section id="publishing">
            <h1>Publicações</h1>
        </section>
    } else if (props.activeTab == 3) {
        return <section id="blog">
            <PostPreview />
        </section>
    }
}

export default TabContent