import React from 'react';

import Kristin from '../images/kristin-in-space.png';
import John from '../images/john-in-space.png';
import Tara from '../images/tara-in-space-.png';


export default function About() {

    return(
        <section className="hero is-primary is-medium bg-main">
            <div className="hero-body">
                <div className="columns is multiline">
                <div className="column is-one-third">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-240x240">
                                <img src= {Kristin} />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-5 has-text-dark">Kristin Hargrove</p>
                                    <p className="content">Full stack developer, sports player, knitter, and reader. Favorite destination - Lisbon.</p>
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>

                <div className="column is-one-third">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-240x240">
                                <img src= {John} />
                            </figure>
                        </div>
                    </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-5 has-text-dark">John Nutter</p>
                                    <p className="content">Full stack developer fueled on coffee, fan of synthesizers and fm synthesis. Hasn't gotten to travel much, but is using this app to plan a trip to Japan!
                                    </p>
                                </div>    
                            </div>
                        </div>
                </div>       

                <div className="column is-one-third">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-240x240">
                                <img src= {Tara} />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-5 has-text-dark">Tara Davies</p>
                                    <p className="content">Full stack developer, product manager, dj, podcast host, and Twitch Affiliate. Favorite destination - Italy.</p>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
                </div>
            </div>
        </section>
    )
}
