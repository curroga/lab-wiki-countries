import React from 'react';
import CountriesList from './CountriesList';
import countries from '../countries.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CountryDetails() {
  const { alpha3Code } = useParams();

  //console.log(countries)
  const pais = countries.filter((eachCountrie) => {
    if (alpha3Code === eachCountrie.alpha3Code) {
      return true;
    } else {
      return false;
    }
  });
  console.log(pais);
  return (
    <div className="d-flex">
      <CountriesList />

      <div className="col-7">
        <h1>{pais[0].name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{pais[0].capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {pais[0].area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {pais[0].borders.map((eachBorder) => {
                  return (
                    <ul key={eachBorder}>
                      
                      <Link className="list-group-item list-group-item-action"
                       to={`/country/${eachBorder}`}>
                      {countries.map((eachCountry) => {
                        return eachCountry.alpha3Code === eachBorder && eachCountry.name.official
                      })}
                      {/* {eachBorder} */}
                      </Link>
                    </ul>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
