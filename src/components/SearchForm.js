import React, { useState, useEffect } from "react";


export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  
  // console.log("character props", props.characters);

  useEffect(() => {
    const results = props.characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
    props.setSearchResults(results);
    // props.setCharacters(results);
    // console.log(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    props.setSearched(true);
    // console.log(searchTerm);
  }

  return (
    <section className="search-form">
     <label htmlFor="search">Search by Name: </label>
      <input id="name" type="text" name="textfield" placeholder="Search" value={searchTerm} onChange={handleChange} />
    </section>
  );
}
