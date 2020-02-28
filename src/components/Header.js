import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover {
      color: #a9d3e9;
    }
  `;
  const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/characters">Characters</StyledLink>
        <StyledLink to="/locations">Locations</StyledLink>
        <StyledLink to="/episodes">Episodes</StyledLink>
      </Nav>
    </header>
  );
}
