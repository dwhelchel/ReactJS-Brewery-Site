import React, { Component } from 'react';
import '../css/Content.css';

class Content extends Component {
    render() {
        return (
            <div id="backdrop">
                <h1>United States Craft Breweries</h1>

                {this.props.breweries.length > 0 ? (
                <div className="contentContainer">
                    {this.props.breweries.map((item, index) => {

                        var noPhone = false;

                        if (item.phone !== "") {
                            var number = item.phone;
                            var newNum = "(" + number.substring(0, 3) + ") " + number.substring(3, 6) + "-" + number.substring(6, 10);
                        } else {
                            noPhone = true;
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
                                    {!noPhone ? <h3>Phone Number</h3> : null}
                                    <p>{newNum}</p>
                                    <button><a href={item.website_url} target="_blank" rel="noopener noreferrer">Website</a></button>
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