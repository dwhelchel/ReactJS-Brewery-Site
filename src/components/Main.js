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
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Get initial set of breweries for screen
    async componentDidMount() {
        await this.getItems("");
    }

    // On submit of filter form, make another HTTP request with filters
    async handleClick() {

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

    // Handle change in form and update state
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    // Fetch list of items according to the query string
    async getItems(queryString) {
        console.log(queryString);
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
                            <input type="text" name="name" value={this.state.name} placeholder="Brewery Name" onChange={this.handleChange}></input>
                            {/* List of states alphabetized */}
                            <select name="state" value={this.state.state} onChange={this.handleChange}>
                                <option value="">Select a state</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="District_Of_Columbia">District Of Columbia</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New_Hampshire">New Hampshire</option>
                                <option value="New_Jersey">New Jersey</option>
                                <option value="New_Mexico">New Mexico</option>
                                <option value="New_York">New York</option>
                                <option value="North_Carolina">North Carolina</option>
                                <option value="North_Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode_Island">Rhode Island</option>
                                <option value="South_Carolina">South Carolina</option>
                                <option value="South_Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West_Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                            </select>
                            <select>
                                <option value="">Select a city</option>    
                            </select>
                            <button type="button" onClick={this.handleClick}>Search</button>		
                        </form>
                        {/* End of filter form */}
                    </div>
                </div>
                <div>
                    <Content breweries={this.state.breweries} />
                </div>
            </div>
        )
    }
}

export default Main;