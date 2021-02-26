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
                <input type="submit" />
            </form>
        </div>

    )
 }

export default SearchForm;