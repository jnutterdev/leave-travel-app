import React from 'react';

import SearchForm from '../containers/SearchForm';

export default function Hero(){
    return(
        <section className="hero is-primary is-medium">
        <div className="hero-body">
            <div className="columns">
                <div className="column">
                    <h1 className="title">
                    LEAVE.
                    </h1>
                    <p className="subtitle">
                        Go on, get lost! Take an adventure. Find a destination.
                    </p>
                </div>
            <div className="column">
            <figure className="is-square">
                {/* <img className="is-rounded" src={process.env.PUBLIC_URL+"/img/beach02.jpg"} width="200" height="200" alt="Beach scene" /> */}
                <SearchForm />
            </figure>
            </div>
            </div>
        </div>
        </section>
    )
}