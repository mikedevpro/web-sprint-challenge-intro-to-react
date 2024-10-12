import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'


function App() {
  const urlPlanets = 'http://localhost:9009/api/planets'
  const urlPeople = 'http://localhost:9009/api/people'

  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const [resPlanets, resPeople] = await Promise.all ([axios.get(urlPlanets), axios.get(urlPeople)])
      let characters = resPeople.data.map(char => {
        return {...char, homeworld: resPlanets.data.find(world => world.id == char.homeworld)}
      })
      setData (characters)
    }
    getData()
  }, [])

  
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      
        {
          data.map(char => <Character key={char.id} data={char} />)
        }
        
      
        
      
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
