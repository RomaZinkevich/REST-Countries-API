import { Link } from "react-router-dom"
import '../styles/country.css'

const Country = ({country}) => {
  let id = country.ccn3
  return (
    <Link to={`/REST-Countries-API/country/${id}`} className="country">
      <img src={country.flags.png} alt="" />
      <div className="country-info">
        <h2>{country.name["common"]}</h2>
        <div> <p>Population:</p> {String(country.population).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </div>
        <div> <p>Region:</p> {country.region} </div>
        <div> <p>Capital:</p> {country.capital} </div>
      </div>
    </Link>
  )
}

export default Country