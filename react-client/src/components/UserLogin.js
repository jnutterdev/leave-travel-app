import React, { useState } from 'react';

export default function UserLogin() {

    return (
        <>

    <div className="hero is-primary is-large bg-image"> 
        <div className="hero-body">
            <div className="container has-text-centered">
               
            </div>
        </div>

            <div className="hero-foot is-centered">
                <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                    <ul>
                        <li className="is-active"><a href="/routes">Routes</a></li>
                        <li><a href="/stay">Where to stay</a></li>
                        <li><a href="/checklist">Checklist</a></li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
        <div className="container bg-trips p-fix">
            <div className="columns is-centered">
                <div className="column is-half is-centered">
                    <ul className="menu-list">
                        <li className="is-active">
                            <a href="/trips">Route</a>
                                <ul className="list-line">
                                    <li><sub>Start from</sub></li>
                                    <li className="bg-line">|</li>
                                    <li><a href="/trip" className=""><h1>Gatlinburg - 4 nights</h1></a></li>
                                    <li className="bg-line">|</li>
                                    <li><a href="/trip" className=""><h1>Tampa - 2 nights</h1></a></li>
                                    <li className="bg-line">|</li>
                                    <li><sub>End at</sub></li>
                                </ul>
                        </li>
                        <li><button className="button is-white is-primary">Edit</button></li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li>
                           
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
        </div>
        </div>
        </>
    )
}