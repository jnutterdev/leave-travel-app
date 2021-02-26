import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Mytrips() {

    const [value, onChange] = useState(new Date());

    return (

        <div className="columns">
            <div className="column is-two-thirds">
            <ul className="menu-list">
                <li>
                <a href="/trips" className="is-active">Route</a>
                    <ul>
                        <li>Start from</li>
                        <li>Gatlinburg - 4 nights</li>
                        <li>End at - Home</li>
                    </ul>
                </li>
                <li><button className="button">Edit</button></li>
            </ul>
            </div>
                <div className="column">
                    <ul>
                        <li>
                            <Calendar 
                            onChange={onChange}
                            value={value}
                            />
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
        </div>


    )
}