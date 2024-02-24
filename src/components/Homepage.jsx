import Header from "./Header"
import Countries from "./Countries"
import Filtering from "./Filtering"
import { useState, useEffect } from "react"

function App() {
const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      const countriesFromServer = await fetchCountries(null)
      setCountries(countriesFromServer)
    }

    getCountries()
  }, [])

  //Fetching data from API
  const fetchCountries = async (region) => {
    let link = "https://restcountries.com/v3.1"
    link = !region ? `${link}/all` : `${link}/region/${region.toLowerCase()}`
    const res = await fetch(link)
    const data = await res.json()

    return data
  }

  const filterClick = async (title) => {
    const countriesFromServer = await fetchCountries(title)
    setCountries(countriesFromServer)
  }


  return (
    <div>
        <Header />
        <div className="container">
          <Filtering filterClick={filterClick}></Filtering>
          <Countries className="container" data={countries}/>
        </div>
    </div>
  )
}

export default App
