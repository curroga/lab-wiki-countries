import { Link } from 'react-router-dom';
import countries from '../countries.json';
import { useState, useEffect } from 'react'

import axios from 'axios'

function CountriesList() {

  const [paisesList, setPaisesList] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    setIsFetching(true)
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => {
      //console.log(response.data)
      setPaisesList(response.data)
      setIsFetching(false)

    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  if(isFetching === true) {
    return <h3>... buscando</h3>
  }



  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          {paisesList.map((eachPaises, index) => {
            return (
              <div className="list-group">
                <Link
                  key={eachPaises.alpha2Code + index}
                  className="list-group-item list-group-item-action"
                  to={`/country/${eachPaises.alpha3Code}`}
                >
                  {eachPaises.name.official}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
