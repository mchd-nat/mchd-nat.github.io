import './PostPreview.css'
import blogPosts from '../../blogPosts.jsx'

function PostPreview() {
    return (
        <a href="">
            {blogPosts.map(post => (
                <div key={post.id} className="card">
                    <h2>{post.title}</h2>
                    <h3>{post.date}</h3>
                    <p>{post.blurb}</p>
                </div>
            ))}
        </a>
    );
}

export default PostPreview
