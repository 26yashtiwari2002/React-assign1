// src/components/PostCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";
function PostCard({ post }) {
  return (
    <div className="post-card">
      <Link to={`/post/${post.id}`} className="post-link">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.body.substring(0, 100)}...</p>
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
      </Link>
    </div>
  );
}

export default PostCard;
