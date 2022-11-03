import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'

function CountriesList() {
  //console.log(countries[0].alpha3Code)
   const [countriesList, setCountriesList] = useState([])

   useEffect(() => {
    
    setCountriesList(countries)
   }, [])

  return (
    <div>

      <h5>Lista de paises</h5>

      {countriesList.map((eachCountrie) => {
        return(
          <p key ={eachCountrie.alpha2Code}>
          <Link to={`/country/${eachCountrie.alpha3Code}`}>{eachCountrie.name.official}</Link>
          
        </p>
        )
      })}

    
    </div>
  )
}

export default CountriesList