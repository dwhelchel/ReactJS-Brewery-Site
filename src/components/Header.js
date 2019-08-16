import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
    render() {

        

        return (
            <header>
                <div className="header-container">
                    <h1><i className="fas fa-beer" style={{color: 'red', fontSize: '20px'}}></i><span style={{color: 'red'}}> Dakota's</span> Brewery Directory</h1>
                    <nav>
                        <ul>
                            <Link to="/"><li className="link">Home</li></Link>
                            <Link to="/about"><li className="link">About</li></Link>
                        </ul>
                    </nav>
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;