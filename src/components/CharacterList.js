import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get("https://rickandmortyapi.com/api/character")
    .then(response => {
      console.log(response);
      const characterList = response.data.results;
      setCharacters(characterList);
    })
    .catch(err => {
      console.log("The data was not returned", err);
    })
  }, []);

  return (
    <section className="character-list">
      <SearchForm characters={characters} setCharacters={setCharacters} searchResults={searchResults} setSearchResults={setSearchResults} setSearched={setSearched} />
      {(!searched ? characters : searchResults).map(character => {
        return <CharacterCard key={character.id} character={character}/>
      })}
    </section>
  );
}
