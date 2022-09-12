import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { handleSearch } from "../SearchContext/SearchContext";
import "../styles/Search.css";
import { useMutation } from "react-query";
import SearchLoadingSpinner from "../SearchLoading/SearchLoadingSpinner";

const Search = (search) => {
  const { input, setInput, setSearchedPokemonData } = useContext(handleSearch);

  const handleInput = (e) => {
    const transformToLowerCase = e.target.value;
    setInput(transformToLowerCase.toLowerCase());
  };

  const { mutate, isLoading } = useMutation((input) => {
    const pokemonData = fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((res) => res.json())
      .then((responseData) => setSearchedPokemonData((prev) => [responseData]));
    return pokemonData;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    mutate(input);
  };

  return (
    <form onSubmit={handleSubmit} className="containerSearch">
      <div className="inputSearchContainer">
        <input
          type="text"
          placeholder="Enter Pokemon Name"
          onChange={handleInput}
        />
      </div>
      <div className="spinnerContainer">
        {isLoading ? <SearchLoadingSpinner /> : null}
      </div>
    </form>
  );
};

export default Search;
