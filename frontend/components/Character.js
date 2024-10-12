import React, { useState } from 'react'

function Character ({data}) { 
const [planetsShow, setPlanetsShow] = useState (false);
const toggle = () => setPlanetsShow (!planetsShow)

      return (
        <div className="character-card" onClick={toggle}>
        <h3 className="character-name">{data.name}</h3>
        {planetsShow && <p>Planet: <span className="character-planet">{data.homeworld.name}</span></p>} 
        </div>
      )
  
}

export default Character
