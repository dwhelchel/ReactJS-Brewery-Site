import React, { Component } from 'react';
import '../css/Content.css';
import error from '../img/frown.jpg';

class Content extends Component {
    render() {
        return (
            <div id="backdrop">
                <h1>United States Craft Breweries</h1>

                {this.props.breweries.length > 0 ? (
                <div className="contentContainer">
                    {this.props.breweries.map((item, index) => {

                        if (number !== "") {
                            var number = item.phone;
                            var newNum = "(" + number.substring(0, 3) + ") " + number.substring(3, 6) + "-" + number.substring(6, 10);
                        }

                        return (
                            <div className="card">
                                <div id="header-container">
                                    <h1>{item.name}</h1>
                                </div>
                                <div id="card-container">
                                    <h3>Address</h3>
                                    <p>{item.street}</p>
                                    <p>{item.city}, {item.state} {item.postal_code}</p>
                                    <h3>Phone Number</h3>
                                    <p>{newNum}</p>
                                    <button><a href={item.website_url} target="_blank">Website</a></button>
                                </div>
                            </div>
                        )
                    })}
                </div>) : (
                <div id="error-screen">
                    <p><i class="far fa-frown"></i> Oh noes! There doesn't appear to be a matching brewery for your inputs!</p>
                    <p>Try entering a new brewery name, state, or city for another go!</p>
                </div>
                )}
            </div>
        )
    }
}

export default Content;