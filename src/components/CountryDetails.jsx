import React from 'react'
import CountriesList from './CountriesList'
import countries from '../countries.json'
import { useParams } from 'react-router-dom'



function CountryDetails() {

  const {alpha3Code} = useParams()
  
  //console.log(countries)
  const pais = countries.filter((eachCountrie) => {
    if(alpha3Code === eachCountrie.alpha3Code){
      return true
    }else {
      return false
    }
  })
  console.log(pais[0])
  return (

    <div>

      <div id='country-container'>

      <CountriesList />

      <div>
        
        <p>Nombre:{pais[0].name.official}</p>
        <p>Capital:{pais[0].capital[0]}</p>
        <p>Area:{pais[0].area}km^2</p>

        <div>
        <p>Borders: </p>
        {pais[0].borders.map((eachBorder) => {
          return(
            <ul>
              <li>{eachBorder}</li>

            </ul>
          )
        })}
        </div>

      </div>
      

      </div>


    </div>
  )
}

export default CountryDetails