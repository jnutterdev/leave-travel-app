import React, { useState } from 'react';

import {
    useHistory
} from 'react-router-dom';

const SearchForm = (props) => {
    let history = useHistory();

    const [ destination, setDestination ] = useState("");
    const [ dates, setDates ] = useState("");
    const [ numberOfPeople, setNumberOfPeople ] = useState("");

    //James - this is what I added 

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleClick(destination, dates, numberOfPeople);
        history.push("/results");
    }

    return (
        <div className="container p-6">   
            <form onSubmit={ handleSubmit }>
            <label className="control has-icons-left">
                   
                    <input className="input mb-3"
                        type="text"
                        value={ destination }
                        onChange={event => 
                        setDestination(event.target.value)}
                        placeholder="Destination"
                        required
                    />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                            
                </label>
                <label className="control has-icons-left">
                    <input className="input mb-3"
                        type="date"
                        value={ dates }
                        onChange={event => 
                        setDates(event.target.value)}
                    />
                    <span className="icon is-small is-left">
                            {/* <i className="fas fa-calendar"></i> */}
                        </span>
                </label> 
                <label className="control has-icons-left">
                    <input className="input mb-3"
                        type="number"
                        value={ numberOfPeople }
                        placeholder="Number of people"
                        onChange={event => 
                            setNumberOfPeople(event.target.value)}
                    />
                    <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                </label>
                    <useHistory to = "/results">
                        <button className="button is-primary" type="submit">Search</button>
                    </useHistory>

            </form>
        </div>
    )
 }

export default SearchForm;