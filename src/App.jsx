import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import CardContainer from './components/CardContainer/CardContainer'

function App() {


  return (
    <div className="App">
      <Header/>
      <CardContainer/>
    </div>
  )
}

export default App
