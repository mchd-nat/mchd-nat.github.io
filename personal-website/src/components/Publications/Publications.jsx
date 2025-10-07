import publications from "../../publications.jsx";
import "./Publications.css";

function Publications() {
  return (
    <>
      {publications.map((pub) => (
        <a href={pub.url} target="_blank" className="card">
          <h1>{pub.title}</h1>
          <h2>Publicado em {pub.publisher}</h2>
          <p>
            <span>{pub.doi}</span>
          </p>
        </a>
      ))}
    </>
  );
}

export default Publications;
