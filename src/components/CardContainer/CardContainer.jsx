import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "../styles/CardContainer.css";

const CardContainer = () => {

  const [pokemonInfo, setPokemonInfo] = useState([]);

  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0")
      .then((response) => response.json())
      .then((responseJson) => fetchPokemonData(responseJson.results));
  }, []);

  

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
            pokemonInfo.map((data,index) => {
                return <Fragment key={index}>
                <Card data={data}/>
                </Fragment>
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
