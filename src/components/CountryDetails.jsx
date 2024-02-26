import '../styles/countrydetails.css'
import BorderCountry from './BorderCountry'
import { Link } from "react-router-dom"

const CountryDetails = ({country, borders}) => {
  return (
    <div className="country-detailed">
        <img src={country.flags.svg} alt="" />
        <div className="info">
            <h2>{country.name["common"]}</h2>
            <div className="details">
                <div className="details-1">
                    <div>
                        <p>Native Name: </p> {Object.values(country.name.nativeName)[0].common}
                    </div>
                    <div>
                        <p>Population: </p> {String(country.population).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                    <div>
                        <p>Region: </p> {country.region}
                    </div>
                    <div>
                        <p>Sub Region: </p> {country.subregion}
                    </div>
                    <div>
                        <p>Capital: </p> {country.capital}
                    </div>

                </div>
                <div className="details-2">
                    <div>
                        <p>Top Level Domain: </p> {country.tld}
                    </div>
                    <div>
                        <p>Currencies: </p> {Object.values(country.currencies)[0].name}
                    </div>
                    <div>
                        <p>Languages: </p> {Object.values(country.languages).join(', ')}
                    </div>
                </div>
            </div>
            <div className="border-countries">
                <p>Border Countries:</p>
                {borders.map(el=>{
                    return  (<Link to={`/country/${el.id}`}>
                        <BorderCountry title={el.title} />
                    </Link>)
                })}

            </div>
        </div>
    </div>
  )
}

export default CountryDetails