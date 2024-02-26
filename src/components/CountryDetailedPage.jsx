import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Header from "./Header"
import BackButton from './BackButton'
import CountryDetails from './CountryDetails'

const CountryDetailedPage = () => {
  const { id } = useParams()
  const [ country, setCountry ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ borders, setBorders ] = useState([])
  const navigate = useNavigate();
  let content

  const backButtonHandler = () => {
    navigate(-1)
  }

  useEffect(() => {
    const getBorders = async (country) => {
      let borderedCountries = await country.borders.map(async (element) => {
        let country = await fetchCountry(element)
        return {
          "title":country.name["common"],
          "id":country.ccn3
        }
      });
      borderedCountries = await Promise.all(borderedCountries)
      borderedCountries = borderedCountries.splice(0,3)
      setBorders(borderedCountries)
    }

    const getCountry = async () => {
      setLoading(true)
      const countryFromServer = await fetchCountry(id)
      setCountry(countryFromServer)
      getBorders(countryFromServer)
      setLoading(false)
    }

    getCountry()
  }, [id])


  //Fetching data from API
  const fetchCountry = async (id) => {
    let link = `https://restcountries.com/v3.1/alpha/${id}`
    const res = await fetch(link)
    const data = await res.json()

    return data[0]
  }

  if (loading) content="Loading..."
  else if (country.status===404) content="No countries found ;<"
  else content = <h1>{<CountryDetails country={country} borders={borders}/>}</h1>

  return (
    <>
      <Header />
      <div className="container">
        <BackButton btnHandler={backButtonHandler}/>
        {content}
      </div>
    </>
  )
}

export default CountryDetailedPage