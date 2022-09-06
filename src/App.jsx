import './App.css'
import Header from './components/Header/Header'
import CardContainer from './components/CardContainer/CardContainer'
import {useSearchContext} from './components/SearchContext/SearchContext'
import SearchCardContainer from './components/SearchCardContainer/SearchCardContainer'
import { useState } from 'react'

function App() {

  const {input} = useSearchContext();

  // const [inputvalue,setInputValue] = useState('');

  console.log(input);
  return (
    <div className="App">
      <Header/>
      {input? <SearchCardContainer/>: <CardContainer/>}
      
    </div>
  )
}

export default App
