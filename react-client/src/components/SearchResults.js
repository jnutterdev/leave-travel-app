import React from 'react';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                error: null,
                isLoaded: false,
                places:[],
            };

            this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const url = `https://api.sygictravelapi.com/1.2/en/places/list?query=${this.props.destination}`
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

    handleClick(place, e) {
        e.preventDefault();

        const data = {
            placeId: place.id,
            place: place.name,
            // userId: ,
            travelDates: "",
            reservations: "",
            photo: place.thumbnail_url,
            placeURL: place.url
        }

        const url= 'http://localhost:3001/mytrips'
        fetch((url), {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
    }

    render() {
        const { error, isLoaded, places } = this.state;
        console.log(places)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                <div className="container p-fix">
                    <div className="columns is-mobile is-multiline">
                    {places.map(place => (
                        <div className="column is-one-third">
                        <div className="card" style={{ height: '325px' }}>
                        <div className="card-image">
                            <figure className="image is-16by9">
                                <img src={ place.thumbnail_url ? place.thumbnail_url : "https://placeimg.com/640/480/nature"} alt={ place.name } />
                            </figure>
                         <span className="icon is-small fav-dest">
                            <a href="#" className="likes" ><i className="fa fa-heart likes" aria-hidden="true"></i></a>
                         </span>
                       </div>
                       <div className="card-content">
                         <div className="media">
                           <div className="media-left">
                             <figure className="image is-48x48">
                             <img src={ place.thumbnail_url ? place.thumbnail_url : "https://placeimg.com/48/48/nature"} alt={ place.name  } />
                             </figure>
                           </div>
                           <div className="media-content has-text-left">
                             <p className="title is-6">{place.name}</p>
                             <p className="subtitle is-6"><a href={place.url} target="_blank" rel="noreferrer">{place.name_suffix}</a></p>
                           </div>
                         </div>
                     
                         {/* <div className="content has-text-left" style= {{ height: 96 }}>
                           <p style={{height: 80}}>{place.perex}</p>
                         </div> */}
                       </div>
                        <div style = {{ display: "flex", justifyContent: "center", alignItems: "center", bottom: 10 }}>
                            <button style= {{display: "float"}} className="button" onClick={this.handleClick.bind(this, place)}>Add To Trip</button>
                        </div>
                     </div>
                     </div>
                    ))}
                    </div>
                </div>
            );
        }
    }
}

export default SearchResults;