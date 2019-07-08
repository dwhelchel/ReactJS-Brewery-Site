import React, { Component } from 'react';
import '../css/Content.css';

class Content extends Component {
    render() {
        return (
            <div id="backdrop">
                <h1>United States Craft Breweries</h1>
                <div className="contentContainer">
                    {this.props.breweries.map((item, index) => {
                        return (
                            <div className="card">
                                <h1>{item.name}</h1>
                                <h3>Address</h3>
                                <p>{item.street}</p>
                                <p>{item.city}, {item.state} {item.postal_code}</p>
                                <h3>Phone Number</h3>
                                <p>{item.phone}</p>
                                <button><a href={item.website_url}>Website</a></button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Content;