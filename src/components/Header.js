import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <h1><i className="fas fa-beer" style={{color: 'white', fontSize: '25px'}}></i> Dakota's Brewery Directory</h1>
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
}

export default Header;