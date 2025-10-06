import './Tabs.css';
import '../light_mode.css'

function Tabs({onClick, title, index, activeTab}) {
    const isActiveTab = activeTab === index;

    return <ul>
        <li>
            <button className={isActiveTab ? "active" : ""} onClick={() => onClick(index)}>
                {title}
            </button>
        </li>
    </ul> 
}

export default Tabs