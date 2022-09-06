import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import { handleSearch } from "../SearchContext/SearchContext";
import "../styles/CardContainer.css";

const CardContainer = () => {

  const [pokemonInfo, setPokemonInfo] = useState([]);

  const {input,setInput} = useContext(handleSearch);

  const [searchedValue,setSearchedValue] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0")
      .then((response) => response.json())
      .then((responseJson) => fetchPokemonData(responseJson.results));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then(res => res.json())
      .then(res => setSearchedValue(prev => [...prev, res]))
    },200);

    return () => clearTimeout(timer);
  },[input])


  console.log(searchedValue);

  const fetchPokemonData = (response) => {
    response.map((dataPokemon) => {
        fetch(dataPokemon.url)
        .then(res => res.json())
        .then(res => setPokemonInfo(pre => [...pre, res]));
    })
  }

  



  return (
    <div>
      <section className="Card_Container">
        {/* <Card/> */}
        {
            pokemonInfo.map((data) => {
                return <Card data={data}/>
            })
        }


        {/* <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> */}
      </section>
    </div>
  );
};

export default CardContainer;
