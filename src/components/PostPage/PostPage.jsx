import { useParams } from "react-router-dom";
import blogPosts from "../../blogPosts.jsx";
import Slugify from "../../slugify.jsx";
import "./PostPage.css";
import { marked } from "marked";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle.jsx";
import { useState } from "react";

function PostPage() {
  const { postTitle } = useParams();
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });

  const post = blogPosts.find((p) => {
    return Slugify(p.title) === Slugify(postTitle);
  });

  const htmlContent = marked.parse(post.body);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkMode", newValue);
      return newValue;
    });
  };

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className="post">
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <link
        rel="stylesheet"
        type="text/css"
        href={darkMode ? "/public/darkMode.css" : "/public/lightMode.css"}
      />

      <a href={`/`} className="goBack">
        <i id="arrow_left_icon" className="iconsax" icon-name="arrow-left"></i>
        <p>Voltar</p>
      </a>
      <h1>{post.title}</h1>
      <h2 className="postDate">{post.date}</h2>
      <div className="body" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default PostPage;
