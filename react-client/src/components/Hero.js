import React from 'react';

export default function Hero(){
    return(
        <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="column">
                <h1 className="title">
                   LEAVE.
                </h1>
                <p className="subtitle">
                    Go on, get lost! Take an adventure. Find a destination.
                </p>
            </div>
            <div className="column">
            <figure className="image is-square">
                <img className="is-rounded" src={process.env.PUBLIC_URL+"/img/beach02.jpg"} width="200" height="200" alt="Beach scene"/>
            </figure>
            </div>
        </div>
        </section>
    )
}