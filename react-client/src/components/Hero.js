import React from 'react';

import SearchForm from '../containers/SearchForm';

export default function Hero(){
    return(
        <section className="hero is-primary is-medium bg-main">
            <div className="hero-body">
                <div className="columns">
                    <div className="column p-6">
                        <p className="title t-shadow">
                            The new way to plan your next trip
                        </p>
                         <p className="subtitle t-shadow">
                         Create a fully customized
                            day by day itinerary for free
                        </p>
                    </div>
                <div className="column">
                  <div className="container b-shadow">
                    <div className="notification is-light p-3">
                      <p className="is-size-3" >Plan your next trip</p>
                      <SearchForm />
                    </div>
                  </div>
                </div>
            </div>
        </div>
     </section>
    )
}