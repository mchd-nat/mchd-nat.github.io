import { useParams } from "react-router-dom"
import blogPosts from "../../blogPosts";
import Slugify from "../../slugify";
import './PostPage.css'
import { marked } from 'marked';

function PostPage() {
    const { postTitle } = useParams();
    const post = blogPosts.find((p) => {
        return Slugify(p.title) === Slugify(postTitle);
    });

    console.log('Markdown:', post.body);
    console.log('HTML:', marked.parse(post.body));

    const htmlContent = marked.parse(post.body);

    if (!post) {
        return <h1>Post not found</h1>
    }

    return <div className="post">
        <a href={`/`} className="goBack">
            <i id="arrow_left_icon" className="iconsax" icon-name="arrow-left"></i>
            <p>Voltar</p>
        </a>
        <h1>{post.title}</h1>
        <h2>{post.date}</h2>
        <div className="body"
            dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
}

export default PostPage