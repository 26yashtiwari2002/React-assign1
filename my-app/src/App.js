import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [page,setPage]=useState(0);
  const limit=6;

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10&skip=0")
      .then((res) => res.json())
      .then((data) => setBlogs(data.posts)) // ✅ FIXED HERE
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setBlogs([]);
      });
  }, []);

  return (
    <div className="App">
     <Navbar />
      {blogs.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="content">
          <h1>HOME</h1>
          
          <div className="blog-list">
            {blogs.map(blog => (
              <div className="blog-card" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by User {blog.userId}</p>
                <p className='blog-body'>{blog.body}</p>
                <div className="blog-info">
                  <div className="reaction-buttons">
                    <button className="like-button">👍 {blog.reactions?.likes || 0}</button>
                    <h4>Reactions</h4>
                    <button className="dislike-button">👎 {blog.reactions?.dislikes || 0}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <div className='page'>
                <button disabled={page===0}onClick={()=>setPage(page-1)}>Prev</button>
                <span>Page{page+1}</span>
                <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;
