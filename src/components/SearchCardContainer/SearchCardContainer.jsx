import React, { Fragment, useState, useEffect } from "react";
import "../styles/CardContainer.css";
import Card from "../Card/Card";
import { handleSearch, useSearchContext } from "../SearchContext/SearchContext";
import { useMutation } from "react-query";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { useContext } from "react";

const SearchCardContainer = () => {

  const {searchedPokemonData} = useContext(handleSearch)
  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <div>
      <section className="Card_Container">
        {/* <Card/> */}
        {searchedPokemonData.map((data, index) => {
          return (
            <Fragment key={index}>
              <Card data={data} />
            </Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default SearchCardContainer;
