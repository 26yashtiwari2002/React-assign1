// src/components/PostDetail.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./PostDetail.css";
function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!post) return <div className="error">Post not found.</div>;

  return (
    <div className="post-detail">
        <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <p className="post-author">Written by User {post.userId}</p>
      <div className="tags">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <div className="reactions">
        <button className="like-button">👍 {post.reactions?.likes}</button>
        <button className="dislike-button">
          👎 {post.reactions?.dislikes}
        </button>
      </div>
      
    </div>
  );
}

export default PostDetail;
