import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <header>
            <div className="header-container">
                <h1><i className="fas fa-beer" style={{color: 'red'}}></i> Dakota's Brewery Directory</h1>
                <nav>
                    <ul>
                        <li className="link"><a href="">Home</a></li>
                        <li className="link"><a href="">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;