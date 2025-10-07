import "./PostPreview.css";
import blogPosts from "../../blogPosts.jsx";
import Slugify from "../../slugify.jsx";

function PostPreview() {
  return (
    <>
      {blogPosts.map((post) => (
        <a key={post.id} href={`/posts/${Slugify(post.title)}`}>
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
            <p>{post.blurb}</p>
          </div>
        </a>
      ))}
    </>
  );
}

export default PostPreview;
