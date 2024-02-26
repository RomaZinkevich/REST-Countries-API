import '../styles/countrydetails.css'

const CountryDetails = ({country}) => {
  return (
    <div className="country-detailed">
        <img src={country.flags.svg} alt="" />
        <div className="info">
            <h2>{country.name["common"]}</h2>
            <div className="details">
                <div className="details-1">
                    <p>Native Name: </p> {Object.values(country.name.nativeName)[0].common}
                    <p>Population: </p> {String(country.population).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <p>Region: </p> {country.region}
                    <p>Sub Region: </p> {country.subregion}
                    <p>Capital: </p> {country.capital}
                </div>
                <div className="details-2">
                    <p>Top Level Domain: </p> {country.tld}
                    <p>Currencies: </p> {Object.values(country.currencies)[0].name}
                    <p>Languages: </p> {Object.values(country.languages).join(', ')}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountryDetails