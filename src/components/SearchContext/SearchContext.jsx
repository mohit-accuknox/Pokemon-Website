import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const handleSearch = createContext();

const SearchContext = ({children}) => {

    const [input,setInput] = useState('');

  return (
    <handleSearch.Provider value={{input,setInput}}>
        {children}
    </handleSearch.Provider>
  )
}

export default SearchContext