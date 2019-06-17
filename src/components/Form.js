import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            state: '',
            type: '',
            breweries: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    breweries: data
                })
            })
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log(this.state.name);
        console.log(this.state.city);
        console.log(this.state.state);
        console.log(this.state.type);
        console.log(this.state.breweries);
        event.preventDefault();
    }

    render() {
        return(
            <div className="main-container">
                <div className="form-container">
                    <div className="header-form-container">
                        <h1>United States Breweries</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Brewery Name" 
                                value={this.state.name} 
                                name="name" 
                                onChange={this.handleChange} />
                            <input 
                                type="text" 
                                placeholder="City" 
                                value={this.state.city} 
                                name="city" 
                                onChange={this.handleChange} />
                            <input 
                                type="text" 
                                placeholder="State" 
                                value={this.state.state} 
                                name="state"
                                onChange={this.handleChange} />
                            <input 
                                type="text" 
                                placeholder="Type i.e micro, regional, brewpub, large, planning, bar, contract, proprietor"  
                                value={this.state.type} 
                                name="type" 
                                onChange={this.handleChange} />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        )   
    }
}

export default Form;