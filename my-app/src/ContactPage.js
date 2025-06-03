// src/components/ContactPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";
function ContactPage() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>Email us at: tiwariyash20020926.com</p>
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  );
}

export default ContactPage;
