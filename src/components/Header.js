import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.navigationSlide = this.navigationSlide.bind(this);
    }

    // Generate event listener for scrolling
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    // Remove event listener for scrolling
    componentWillMount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    // On scroll stick header to the top fixed
    handleScroll() {

        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        // If the page scrolls past header, go sticky
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    }

    // slide the nav bar on burger menu
    navigationSlide() {

        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav');
        const links = document.querySelectorAll('.nav ul a');

        // On burger press move the menu left/right
        nav.classList.toggle('navigation-active');

        // Animate the links
        links.forEach((link, index) => {
            link.style.animation ? 
            link.style.animation = '' :
            link.style.animation = 'linkAnimation 0.5s ease forwards ' + (index / 7 + 0.5) + 's';
        });

        // Burger animation
        burger.classList.toggle('toggle');

    }

    render() {
        return (
            <header id="header">
                <div className="header-container">
                    <h1><i className="fas fa-beer" style={{color: 'red', fontSize: '20px'}}></i><span style={{color: 'red'}}> Dakota's</span> Brewery Directory</h1>
                    <i className="fas fa-beer" id="beer" style={{color: 'red', fontSize: '32px'}}></i>
                    <nav className="nav">
                        <ul>
                            <Link to="/"><li className="link">Home</li></Link>
                            <Link to="/about"><li className="link">About</li></Link>
                        </ul>
                    </nav>
                    <div className="burger" onClick={this.navigationSlide}>
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