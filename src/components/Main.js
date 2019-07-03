import React, { Component } from 'react';
import Content from './Content';
import '../css/Main.css';

const breweryUrl = 'https://api.openbrewerydb.org/breweries';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            state: "",
            city: "",
            type: "",
            breweries: []
        }
        this.getItems = this.getItems.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Get initial set of breweries for screen
    async componentDidMount() {
        await this.getItems("");
    }

    // On submit of filter form, make another HTTP request with filters
    async handleSubmit() {

        const name = this.state.name
        const state = this.state.state
        const city = this.state.city

        // If the user enters a name, state, and city
        if (name !== "" && state !== "" && city !== "") 
            await this.getItems("?by_name=" + this.state.name + "&by_state=" + this.state.state + "&by_city=" + this.state.city)

        // If the user enters a name and a state
        else if (name !== "" && state !== "")
            await this.getItems("?by_name=" + this.state.name + "&by_state=" + this.state.state);

        // If the user enters a name and a city
        else if (name !== "" && city !== "")
            await this.getItems("?by_name=" + this.state.name + "&by_city=" + this.state.city);

        // If the user enters a state and a city
        else if (state !== "" && city !== "")
            await this.getItems("?by_state=" + this.state.state + "&by_city=" + this.state.city);

        // If the user enters a brewery name
        else if (name !== "")
            await this.getItems("?by_name=" + this.state.name)

        // If the user enters a state
        else if (state !== "")
            await this.getItems("?by_state=" + this.state.state)

        // If the user enters a city
        else if (city !== "")
            await this.getItems("?by_city=" + this.state.city)
            
    }

    async getItems(queryString) {
        await fetch(breweryUrl + queryString)
            .then(response => response.json())
            .then(response => this.setState({ breweries: response }))
    }

    render() {
        return (
            <div>
                <div className="main-container">
                    <h1>On the Pursuit of Hoppiness</h1>
                    <p>Your guide to the best breweries in the United States</p>
                    <div>
                        {/* Start of filter form */}
                        <form>
                            <input type="text" name="" placeholder="Brewery Name"></input>
                            {/* List of states alphabetized */}
                            <select name="state">
                                <option value="">Select a state</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            <select>
                                <option value="">Select a city</option>    
                            </select>
                            <button type="submit" onSubmit={this.handleSubmit}>Search</button>		
                        </form>
                        {/* End of filter form */}
                    </div>
                </div>
                <div>
                    <Content breweries={this.breweries} />
                </div>
            </div>
        )
    }
}


export default Main;