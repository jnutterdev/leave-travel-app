import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Mytrips() {
    return (

        <div className="columns">
            <div className="column is-two-thirds">
            <ul class="menu-list">
                <li>
                <a href="/trips" class="is-active">Route</a>
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
                            <Calendar />
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
        </div>


    )
}