import React from 'react';
import './SearchResults.css';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                error: null,
                isLoaded: false,
                places:[]
            };
    }

    componentDidMount() {
        const url = "https://api.sygictravelapi.com/1.2/en/places/list?query={destination}"
        fetch((url), {
        method: "GET",
        headers: {
            'x-api-key': process.env.REACT_APP_TRAVELAPIKEY,
        },
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        places: result.data.places
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, places } = this.state;
        console.log(places);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="columns is-mobile is-multiline is-centered">
                    {places.map(place => (
                        <div className="column is-one-third">
                       <div className="card">
                       <div className="card-image">
                         <figure className="image is-16by9">
                           <img src={ place.thumbnail ? place.thumbnail : "http://placeimg.com/300/300/nature" } alt={ place.name  } />
                         </figure>
                       </div>
                       <div className="card-content">
                         <div className="media">
                           <div className="media-left">
                             <figure className="image is-48x48">
                               <i class="fas fa-compass"></i>
                             </figure>
                           </div>
                           <div className="media-content">
                             <p className="title is-4">{place.name}</p>
                             <p className="subtitle is-6"><a href={place.url} target="_blank" rel="noreferrer">{place.name_suffix}</a></p>
                           </div>
                         </div>
                     
                         <div className="content">
                           {place.perex}    
                         </div>
                       </div>
                     </div>
                     </div>
                    ))}
                </div>
            );
        }
    }
}

export default SearchResults;