// import React from 'react';

// const cities = [
//     // 'city:1',
//     // 'city:12',
//     // 'city:25',
//     // 'city:499',
//     // 'country:18',
//     // 'city:186',
//     // 'city:377',
//     // 'city:379',
//     // 'region:53'
//     'London',
//     'Lisboa',
//     'Budapest',
//     'Rio De Janiero',
//     'Deuschland',
//     'New York',
//     'Los Angeles',
//     'Sydney',
//     'French Alps'
// ]

// class ItineraryOptions extends React.Component {
//     constructor(props) {
//         super(props);
//             this.state = {
//                 error: null,
//                 isLoaded: false,
//                 places:[],
//             };
//     }

//     componentDidMount() {
//         const cityName = cities.map(city => {
//             return city
//         });

//         console.log(cityNumber);
//         const url = `https://api.sygictravelapi.com/1.2/en/trips/templates/?parent_place_id=${cityNumber}`
//         fetch((url), {
//         method: "GET",
//         headers: {
//             'x-api-key': process.env.REACT_APP_TRAVELAPIKEY,
//         },
//         })
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     this.setState({
//                         isLoaded: true,
//                         places: result.data.trips
//                     });
//                 },
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     });
//                 }
//             )
//     }

//     render() {
//         const { error, isLoaded, places } = this.state;
//         if (error) {
//             return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//             return <div>Loading...</div>;
//         } else {
//             return (
//                 <div className="container p-fix">
//                     <div className="columns is-mobile is-multiline is-centered">
//                     {places.map(place => (
//                         <div className="column is-one-third">
//                             <div className="card">
//                                 <div className="card-image">
//                                 <figure className="image is-16by9">
//                                     <img src={ place.thumbnail_url ? place.thumbnail_url : "https://placeimg.com/640/480/nature"} alt={ place.name  } />
//                                 </figure>
//                                 </div>
//                                 <div className="card-content">
//                                 <div className="media">
//                                     <div className="media-left">
//                                         <figure className="image is-48x48">
//                                             <img src={ place.thumbnail_url ? place.thumbnail_url : "https://placeimg.com/48/48/nature"} alt={ place.name  } />
//                                         </figure>
//                                     </div>
//                                     <div className="media-content">
//                                         <p className="title is-6">{place.name}</p>
//                                         <p className="subtitle is-6"><a href={place.url} target="_blank" rel="noreferrer">{place.name_suffix}</a></p>
//                                     </div>
//                                 </div>
//                                 <div className="content">
//                                     <p>{place.perex}</p>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                     </div>
//                 </div>
//             );
//         }
//     }
// }

// export default ItineraryOptions;