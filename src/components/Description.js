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
                </div>
            </div>
        </div>
    );
}

export default Description;