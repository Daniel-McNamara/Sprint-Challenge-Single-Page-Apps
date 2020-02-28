import React from "react";
import styled from "styled-components";

export default function EpisodeCard(props) {
  //console.log(props)
  const Card = styled.div`
    text-align: center;
    width: 30%;
    background: #ed9896;
    border-radius: 20px;
    margin: 10px 0;
  `


  return (
    <Card>
        <h2>{props.episode.name}</h2>
        <h3>Air Date: {props.episode.air_date}</h3>
        <h3>Episode: {props.episode.episode}</h3>
    </Card>
  );
}