import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        Axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(res => {
                console.log(res);
                const locationList = res.data.results;
                setLocations(locationList);
            })
            .catch(err => {
                console.log("The data was not returned", err);
            })
    }, []);

    return (
        <section className="location-list">
            <div className="container">
                {locations.map(location => {
                return <LocationCard Key={location.id} location={location}/>
                })}                
            </div>
        </section>
    )
}