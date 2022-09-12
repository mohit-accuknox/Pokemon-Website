import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const handleSearch = createContext();

const SearchContext = ({children}) => {

    const [input,setInput] = useState('');

    const [searchedPokemonData, setSearchedPokemonData] = useState([]);

  return (
    <handleSearch.Provider value={{input,setInput,searchedPokemonData,setSearchedPokemonData}}>
        {children}
    </handleSearch.Provider>
  )
}

export const useSearchContext = () =>{
  const context = useContext(handleSearch);
  return context;
}

export default SearchContext