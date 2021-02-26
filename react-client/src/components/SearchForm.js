import React, { useState } from 'react';
import {
    useHistory
} from 'react-router-dom';

const SearchForm = (props) => {
    let history = useHistory();

    const [ destination, setDestination ] = useState("");
    const [ dates, setDates ] = useState("");

    //James - this is what I added 

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleClick(destination, dates);
        history.push("/results");
    }

    return (
        <div className="container">
            <form onSubmit = { handleSubmit }>
                <label>
                    <input className="input is-rounded is-primary"
                        type="text"
                        value={destination}
                        onChange={event => 
                        setDestination(event.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="date"
                        value={dates}
                        onChange={event => 
                            setDates(event.target.value)}
                    />
                </label> 
                <label>
                    <input
                        type="number"
                        value=""
                    />
                </label>
                <useHistory to = "/results">
                    <button className="button is-primary" type="submit">Search</button>
                </useHistory>
            </form>
        </div>

    )
 }

export default SearchForm;