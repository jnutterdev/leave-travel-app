import React, { useState } from 'react';

import {
    useHistory
} from 'react-router-dom';

export default function Favorites() {

    const [ destination, setDestination ] = useState("");

    return (
        <>
   
    <div className="hero is-primary is-small bg-fav "> 
    <div className="hero-body">
            <div className="container has-text-left">
               <h1 className="is-size-1">Favorites</h1>
            </div>
        </div>

            <div className="hero-foot is-centered">
                <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                    <ul>
                        <li className="is-active"><a href="/routes">Trips</a></li>
                        <li><a href="/todo">Things to do</a></li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
        <div className="hero is-halfheight container bg-trips p-fix block">
            <div className="columns is-centered ">
                <div className="column">
                   <p className="pl-5 has-text-left">You have no favorites saved!</p>
                   <div className="field block pl-4 pt-4">
                    <label className="control has-icons-left has-icons-right">
                        <input className="input is-light is-light"
                            type="text"
                            value={ destination }
                            placeholder="Search for a favorite place"
                            onChange={event => 
                            setDestination(event.target.value)}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                    </label>
                </div>
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