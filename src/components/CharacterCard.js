import React from "react";

export default function CharacterCard(props) {
  //console.log("character props", props)

  return (
    <div>
      <h2>{props.character.name}</h2>
      <img src={props.character.image} />
      <p>{props.character.status}</p>
    </div>
  );
}
