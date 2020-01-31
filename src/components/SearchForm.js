import React, { useState, useEffect } from "react";


export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // console.log("character props", props.characters);

  useEffect(() => {
    const results = props.characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResults(results);
    props.setCharacters(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    // console.log(searchTerm);
  }

  return (
    <section className="search-form">
     
     <label htmlFor="search">Search: </label>
      <input id="name" type="text" name="textfield" placeholder="Search" value={searchTerm} onChange={handleChange} />
    </section>
  );
}
