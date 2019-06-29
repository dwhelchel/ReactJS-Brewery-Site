import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.breweries}
            </div>
        )
    }
}

export default Content;