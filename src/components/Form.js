import React from 'react';
import '../css/Form.css';

function Form() {
    return(
        <div className="container">
            <form>
                <input type="text" placeholder="Brewery Name" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Type i.e micro, regional, brewpub, large, planning, bar, contract, proprietor" />
            </form>
        </div>
    )   
}

export default Form;