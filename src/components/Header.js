import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <h1><i className="fas fa-beer" style={{color: 'white', fontSize: '25px'}}></i> Dakota's Brewery Directory</h1>
                    <nav>
                        <ul>
                            <Link to="/"><li className="link">Home</li></Link>
                            <Link to="/about"><li className="link">About</li></Link>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;