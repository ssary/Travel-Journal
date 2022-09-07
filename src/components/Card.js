import React from "react";

export default function(props){
    props = props.item;
    return(
        <div id = 'course-container'>
            <img id='card-img' src={props.imageUrl}/>
            <div id = 'main-info'>
                <div id = 'main-info-location'>
                    <img src={require('../images/location.png')}/>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>view on google maps</a>
                </div>

                <h2 id='card-title'>{props.title}</h2>
                <p id = 'card-date'>{`${props.startDate} - ${props.endDate}`}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
/*
export default [
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    }
]*/