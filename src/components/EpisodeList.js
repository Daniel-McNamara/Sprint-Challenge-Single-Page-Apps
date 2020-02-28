import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        Axios
            .get("https://rickandmortyapi.com/api/episode/")
            .then(res => {
                console.log(res);
                const episodeList = res.data.results;
                setEpisodes(episodeList);
            })
            .catch(err => {
                console.log("The data was not returned", err);
            })
    }, []);

    return (
        <section className="location-list">
            <div className="container">
                {episodes.map(episode => {
                    return <EpisodeCard key={episode.id} episode={episode}/>
                })}                
            </div>
        </section>
    )
}