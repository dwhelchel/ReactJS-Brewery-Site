import React, { Component } from 'react';
import '../css/Main.css';
import Form from './Form';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <section className="main">
                <Form />
            </section>
        )
    }
}

export default Main;