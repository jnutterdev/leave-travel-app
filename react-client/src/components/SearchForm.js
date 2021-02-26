import React, { useState } from 'react';
import {
    Link
} from 'react-router-dom';

const SearchForm = (props) => {
    const [ destination, setDestination ] = useState("");

    //James - this is what I added 

    const handleSubmit = (event) => {
        console.log(destination);
        event.preventDefault();
        props.handleClick(destination);
    }

    return (
        <div>
            <form onSubmit = { handleSubmit }>
                <label>
                    <input
                        type="text"
                        value={destination}
                        onChange={event => 
                        setDestination(event.target.value)}
                    />
                </label>
                {/* <label>
                    <input
                        type="date"
                        value={props.dates}
                        min="2021-01-01"
                    />
                </label> */}
                {/* <label>
                    <input
                        type="number"
                        value=""
                    />
                </label> */}
                <Link to = "/results">
                    <input type="submit"/>
                </Link>
            </form>
        </div>

    )
 }

export default SearchForm;