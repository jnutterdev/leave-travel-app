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
        const url = "https://api.sygictravelapi.com/1.2/en/places/list?query=Japan"
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
                <ul>
                    {places.map(place => (
                        <li key={place.name}>
                            {place.name}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default SearchResults;