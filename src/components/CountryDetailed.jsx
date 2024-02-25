import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import Header from "./Header"

const CountryDetailed = () => {
  const { id } = useParams()
  const [ country, setCountry ] = useState([{"name":"Bolivia"}])
  const [ loading, setLoading ] = useState(true)
  let content

  useEffect(() => {
    const getCountry = async () => {
      setLoading(true)
      const countryFromServer = await fetchCountry()
      console.log(countryFromServer)
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
  else content = <h1>{country[0].name.common}</h1>

  return (
    <>
      <Header />
      {content}
    </>
  )
}

export default CountryDetailed