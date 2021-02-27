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
        <div className="container p-fix">   
            <form onSubmit = { handleSubmit }>
            <div className="columns">
            <div className="column">
                <label>
                    <input className="input is-rounded is-primary is-light"
                        type="text"
                        value={destination}
                        onChange={event => 
                        setDestination(event.target.value)}
                    />
                </label>
            </div>
            <div className="column">
                <label>
                    <input className="input is-primary is-light"
                        type="date"
                        value={dates}
                        onChange={event => 
                            setDates(event.target.value)}
                    />
                </label> 
                </div>
                <div className="column">
                <label>
                    <input className="input is-primary is-light"
                        type="number"
                        value=""
                    />
                </label>
                </div>  
                <div className="column">
                    <useHistory to = "/results">
                        <button className="button is-primary" type="submit">Search</button>
                    </useHistory>
                </div>
                </div>
            </form>
        
        </div>
    )
 }

export default SearchForm;