import React from 'react';

import london from '../images/London.jpg';
import Lisbon from '../images/Lisbon.jpg';
import Budapest from '../images/Budapest.jpg';
import Rio from '../images/Rio.jpg';
import NYC from '../images/New_York_City.jpeg';
import LA from '../images/LosAngeles.jpg';
import Germany from '../images/Germany.jpg';
import Sydney from '../images/Sydney.jpg';
import French_Alps from '../images/French_Alps.jpg';


import {
    useHistory
} from 'react-router-dom';

const cities = [
    { name: 'London',
      id: 'city:1',
      photo: london
    },
    {
       name: 'Lisboa',
       id: 'city:12',
       photo: Lisbon
    },
    {
        name: 'Budapest',
        id: 'city:25',
        photo: Budapest
    },
    {
        name: 'Rio De Janiero',
        id: 'city:499',
        photo: Rio
    },
    {
        name: 'Germany',
        id: 'country:18',
        photo: Germany
    },
    {
        name: 'New York',
        id: 'city:186',
        photo: NYC
    },
    {
        name: 'Los Angeles',
        id: 'city:377',
        photo: LA
    },
    {
        name: 'Sydney',
        id: 'city:379',
        photo: Sydney
    },
    {
        name: 'French Alps',
        id: 'region:53',
        photo: French_Alps
    }
]

const ItineraryOptions =  (props) => {
    const itineraryURL = 'https://api.sygictravelapi.com/1.2/en/trips/templates/?parent_place_id=';
    const popularDestinations = cities.map(destination => {
        return (
        <div className="column is-one-third">
            <div className="card" style={{ height: '325px' }}>
                <div className="card-image">
                <figure className="image is-16by9">
                    <img src= {destination.photo } alt={ destination.name  } />
                </figure>
                </div>
                <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-3">{destination.name}</p>
                        <p className="subtitle is-6"><a href = {itineraryURL + destination.id} target="_blank" rel="noreferrer"><br /> Itineraries</a></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
   )})
 
    return (
        <>
            <div className="container p-fix">
            <h3 className = "title">Trending Destinations</h3>
                <div className="columns is-mobile is-multiline is-centered">
                    {popularDestinations}
                </div>
            </div>
        </>
    )


}

export default ItineraryOptions;