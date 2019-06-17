import React from 'react';
import '../css/Form.css';

function Form() {
    return(
        <div className="main-container">
            <div className="form-container">
                <div className="header-form-container">
                    <h1>United States Breweries</h1>
                    <form>
                        <input type="text" placeholder="Brewery Name" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                        <input type="text" placeholder="Type i.e micro, regional, brewpub, large, planning, bar, contract, proprietor" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )   
}

export default Form;