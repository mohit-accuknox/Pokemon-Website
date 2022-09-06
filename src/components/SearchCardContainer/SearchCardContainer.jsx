import React, { Fragment, useState,useEffect } from 'react'
import '../styles/CardContainer.css'
import Card from '../Card/Card'
import { useSearchContext } from "../SearchContext/SearchContext";

const SearchCardContainer = () => {

    const {input} = useSearchContext();

  const [searchedValue,setSearchedValue] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then(res => res.json())
      .then(res => setSearchedValue(prev => [...prev, res]))
    },500);

    return () => clearTimeout(timer);
  },[input])

  console.log(searchedValue);

  return (
    <div>
        <section className="Card_Container">
        {/* <Card/> */}
        {
            searchedValue.map((data,index) => {
                return <Fragment key={index}>
                <Card data={data}/>
                </Fragment> 
            })
        }
      </section>
    </div>
  )
}

export default SearchCardContainer