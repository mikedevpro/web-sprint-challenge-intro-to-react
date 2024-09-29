import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])
  useEffect(() => {
    function getPeople() {
      axios.get(urlPeople)
      .then(res => {
        const people = res.data
        console.log(people)
        setPeople(people)
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
        const planets = res.data
        console.log(planets)
        setPlanets(planets)
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
      <h3>
        {
          people.map(pe => <p key={pe.id}>{pe.name}</p>)
        }
        {
          planets.map(pl => <p key={pl.id}>{pl.name}</p>)
        }
      </h3>
        
      
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
