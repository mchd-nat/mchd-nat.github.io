import publications from '../../publications.jsx'
import './Publications.css'

function Publications() {
    return <>
        {publications.map(pub => (
            <a href={pub.url} className="card">
                <h1>{pub.title}</h1>
                <h2>Publicado em {pub.publisher}</h2>
                <p>{pub.doi}</p>
            </a>
        ))}
    </>
}

export default Publications