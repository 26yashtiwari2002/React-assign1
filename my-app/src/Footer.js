import React from "react";
import './Footer.css';
function Footer(){
    return(
        <footer className="Footer">
            <p>
                &copy;{new Date().getFullYear()} BLOGIFY. All rights reserverd.
            </p>
        </footer>
    );
}
export default Footer;