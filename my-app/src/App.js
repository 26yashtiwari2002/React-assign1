import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import PostCard from "./PostCard";
import PostDetail from "./PostDetail";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Pagination from "./Pagination";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
