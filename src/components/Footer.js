import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <h3>Get connected on my Github and LinkedIn!</h3>
            <ul>
                <li><a href="https://github.com/dwhelchel" target="_blank"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/dakota-whelchel/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer;