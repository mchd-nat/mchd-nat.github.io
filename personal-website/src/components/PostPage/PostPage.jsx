import { useParams } from "react-router-dom"
import blogPosts from "../../blogPosts";
import Slugify from "../../slugify";
import './PostPage.css'
import { marked } from 'marked';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle.jsx";
import { useState } from "react";

function PostPage() {
    const { postTitle } = useParams();
    const [darkMode, setDarkMode] = useState(false);
    const post = blogPosts.find((p) => {
        return Slugify(p.title) === Slugify(postTitle);
    });
    const htmlContent = marked.parse(post.body);
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    if (!post) {
        return <h1>Post not found</h1>
    }

    return <div className="post">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <link rel="stylesheet" href={darkMode ? "/darkMode.css" : "/lightMode.css"} />

        <a href={`/`} className="goBack">
            <i id="arrow_left_icon" className="iconsax" icon-name="arrow-left"></i>
            <p>Voltar</p>
        </a>
        <h1>{post.title}</h1>
        <h2 className="postDate">{post.date}</h2>
        <div className="body"
            dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
}

export default PostPage