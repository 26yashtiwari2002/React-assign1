import React from "react";
import './Navbar.css';
function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-logo"> BLOGIFY</div>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
            <ul className="navbar-links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Contact us">Contact us</a></li>
                <li><a href="#Login">Login</a></li>
            </ul>
            
        </nav>
    );
}
export default Navbar;