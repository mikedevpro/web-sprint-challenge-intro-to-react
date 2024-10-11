import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'


function App() {
  const urlPlanets = 'http://localhost:9009/api/planets'
  const urlPeople = 'http://localhost:9009/api/people'

  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])

  


  useEffect(() => {
    function getPeople() {
      axios.get(urlPeople)
      .then(res => {
        console.log(res.data)
        setPeople(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    getPeople()
  }, [])

  useEffect(() => {
    function getPlanets() {
      axios.get(urlPlanets)
      .then(res => {
        console.log(res.data)
        setPlanets(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    getPlanets()
  }, [])
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      <div className='character-card'>

        
          {people.map(char => (<h3 className='character-name'>{char.name}</h3>))}
        
          {planets.map(pl => (<p key={pl.id}>
          Planet: <span className='character-planet'>{pl.name}</span></p>))}
        
        
      
        
      
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
