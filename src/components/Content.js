import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <div className="contentContainer">
                    {this.props.breweries.map((item, index) => {
                        return (
                            <div className="card">
                                <h1>{item.name}</h1>
                                <p>{item.street}</p>
                                <p>{item.city}, {item.state} {item.postal_code}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Content;