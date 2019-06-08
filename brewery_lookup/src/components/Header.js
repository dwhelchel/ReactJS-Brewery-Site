import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <header className="container">
            <h1>Dakota's Brewery Lookup</h1>
            <nav>
                <ul>
                    <li className="link"><a href="">Home</a></li>
                    <li className="link"><a href="">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;