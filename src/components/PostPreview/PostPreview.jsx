import "./PostPreview.css";
import blogPosts from "../../blogPosts.jsx";
import Slugify from "../../slugify.jsx";

function PostPreview() {
  return (
    <>
      {blogPosts.map((post) => (
        <a
          key={post.title}
          href={`https://natsmachado.github.io/natsmachado/posts/${Slugify(
            post.title
          )}`}
        >
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <h3>
              <span>{post.date}</span>
            </h3>
            <p>{post.blurb}</p>
          </div>
        </a>
      ))}
    </>
  );
}

export default PostPreview;
