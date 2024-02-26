import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import Header from "./Header"
import BackButton from './BackButton'
import CountryDetails from './CountryDetails'

const CountryDetailedPage = () => {
  const { id } = useParams()
  const [ country, setCountry ] = useState([{"name":"Bolivia"}])
  const [ loading, setLoading ] = useState(true)
  let content

  useEffect(() => {
    const getCountry = async () => {
      setLoading(true)
      const countryFromServer = await fetchCountry()
      setCountry(countryFromServer)
      setLoading(false)
    }

    getCountry()
  }, [])


  //Fetching data from API
  const fetchCountry = async () => {
    let link = `https://restcountries.com/v3.1/alpha/${id}`
    const res = await fetch(link)
    const data = await res.json()

    return data
  }

  if (loading) content="Loading..."
  else if (country.status) content="No countries found ;<"
  else content = <h1>{<CountryDetails country={country[0]}/>}</h1>

  return (
    <>
      <Header />
      <div className="container">
        <BackButton />
        {content}
      </div>
    </>
  )
}

export default CountryDetailedPage