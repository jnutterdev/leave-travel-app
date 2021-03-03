import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Add to Trip'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(place, e) {
        e.preventDefault();
        
        this.setState({
            buttonText: 'Added'
        });

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
        const { place } = this.props;
        const { buttonText } = this.state;

        return (
         <div style = {{ display: "flex", justifyContent: "center", alignItems: "center", bottom: 10 }}>
            <button style= {{display: "float"}} className="button" onClick={this.handleClick.bind(this, place)}>{buttonText}</button>
        </div>
        )
    }
}

export default Button;