import '../styles/country.css'

const Country = ({country}) => {
  return (
    <div className="country">
      <img src={country.flags.png} alt="" />
      <div className="country-info">
        <h2>{country.name["common"]}</h2>
        <div> <p>Population:</p> {String(country.population).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </div>
        <div> <p>Region:</p> {country.region} </div>
        <div> <p>Capital:</p> {country.capital} </div>
      </div>
    </div>
  )
}

export default Country