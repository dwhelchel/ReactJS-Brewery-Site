import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <header>
            <h1><i className="fas fa-beer" style={{color: 'red'}}></i> Dakota's Brewery Lookup</h1>
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