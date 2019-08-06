import React from 'react';
import '../css/Description.css';

function Description() {
    return(
        <div id="backdrop-container">
            <div id="description-container">
                <div id="paragraph-container">
                    <p>Welcome to Dakota's Brewery Directory! This web application allows the user to browse a list of
                        craft breweries in the United States. Although not all breweries in the United States are listed
                        here, the Open Brewery Database is currently in beta, and will be updated in the future.</p>
                    <p>I am very passionate about the craft beer community, so I wanted to create an application where
                        people like me could find and experience different craft breweries in each state. This project is powered
                        by the <a style={{color: 'red'}} href="https://www.openbrewerydb.org/" target="_blank" rel="noopener noreferrer">Open Brewery DB</a>.</p>
                    <blockquote>
                        "Beer is proof that God loves us and wants us to be happy." <br />
                        - Benjamin Franklin
                    </blockquote>
                </div>
            </div>
            <div id="tech-showcase-container">
                <div id="main-tech-showcase">
                    <h1>Main Technologies</h1>
                    <div id="icon-list-container">
                        <div className="icon-container">
                            <p>HTML 5</p>
                            <a id="html5" href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer"><i class="fab fa-html5"></i></a>
                        </div>
                        <div className="icon-container">
                            <p>React</p>
                            <a id="react" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><i class="fab fa-react"></i></a>
                        </div>
                        <div className="icon-container">
                            <p>JavaScript</p>
                            <a id="javascript" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-js-square"></i></a>
                        </div>
                        <div className="icon-container">
                            <p>CSS 3</p>
                            <a id="css3" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank" rel="noopener noreferrer"><i class="fab fa-css3-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;