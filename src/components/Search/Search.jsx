import React from 'react'
import { useContext } from 'react'
import { handleSearch } from '../SearchContext/SearchContext'
import '../styles/Search.css'

const Search = (search) => {

    const {setInput} = useContext(handleSearch);

    const handleInput = (e) => {
        setInput(e.target.value)
    }

  return (
    <div>
        <input type="text" placeholder='Enter Pokemon Name' onChange={handleInput}/>
    </div>
  )
}

export default Search