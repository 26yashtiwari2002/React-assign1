// src/components/AboutPage.js
import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>This is a blog reading application built with React.</p>
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  );
}

export default AboutPage;
