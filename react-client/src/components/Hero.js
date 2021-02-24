import React from 'react';

export default function Hero(){
    return(
        <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="column">
                <p className="title">
                   Leave.
                </p>
                <p className="subtitle">
                    Go on, get lost! Take an adventure. Find a destination.
                </p>
            </div>
            <div className="column">
            <figure className="image is-128x128">
                <img className="is-rounded borders" src={process.env.PUBLIC_URL+"/img/beach02.jpg"} alt="Beach scene"/>
            </figure>
            </div>
        </div>
        </section>
    )
}