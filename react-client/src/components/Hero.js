import React from 'react';

export default function Hero(){
    return(
        <section className="hero is-fullheight">
        <div className="hero-body columns is-one-quarter">
            <div className="column is-three-fifths">
                <p className="title">
                   Leave.
                </p>
                <p className="subtitle">
                    Go on, get lost!
                </p>
            </div>
            <div className="column auto">
                <img src={process.env.PUBLIC_URL+"/img/beach01.jpg"} alt="Beach scene"/>
            </div>
        </div>
        </section>
    )
}