import React from 'react';


const SearchForm = (props) => {

    return (
        <div>
            <form>
                <label>
                    <input
                        type="text"
                        value="Enter Destination"
                    />
                </label>
                <label>
                    <input
                        type="date"
                        value="Enter Dates"
                        min="2021-01-01"
                    />
                </label>
                {/* <label>
                    <input
                        type="number"
                        value=""
                    />
                </label> */}
                <input 
                type="submit"
                onClick = { props.handleClick } />
            </form>
        </div>

    )
 }

export default SearchForm;