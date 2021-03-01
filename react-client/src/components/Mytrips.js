import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyTrips() {

    // const [value, setValue] = useState(new Date());
    const [places, setPlaces] = useState([]);
    
    useEffect(() => {
        const url = `http://localhost:3001/mytrips`
        fetch((url), {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPlaces(data);
        })
    }, [])
    
    // function onChange(nextValue) {
    //     setValue(nextValue);
    //   }

    return (
        <>

        {places.map(place => (
            <>
                {place.id}
            </>
        ))}
 
        </>
    )
}

export default MyTrips;