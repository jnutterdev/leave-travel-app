import React, { useState, useEffect } from 'react';


function MyTrips() {

    
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
    
   

export default function MyTrips() {
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