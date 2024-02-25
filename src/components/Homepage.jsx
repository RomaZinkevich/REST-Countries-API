import Header from "./Header"
import Countries from "./Countries"
import Filtering from "./Filtering"
import { useState, useEffect } from "react"

function App() {
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true)
      const countriesFromServer = await fetchCountries("all")
      setCountries(countriesFromServer)
      setLoading(false)
    }

    getCountries()
  }, [])

  //Fetching data from API
  const fetchCountries = async (link) => {
    link = "https://restcountries.com/v3.1/" + link
    const res = await fetch(link)
    const data = await res.json()

    return data
  }

  //Filters countries by region
  const filterClick = async (region) => {
    setLoading(true)
    const countriesFromServer = await fetchCountries(`region/${region.toLowerCase()}`)
    setCountries(countriesFromServer)
    setLoading(false)
  }

  const searchCountry = async (text) => {
    setLoading(true)
    setSearchText(text)
    let link = text ? `name/${text}` : "all"
    const countriesFromServer = await fetchCountries(link)
    setCountries(countriesFromServer)
    setLoading(false)
  }


  return (
    <div>
        <Header />
        <div className="container">
          <Filtering filterClick={filterClick} searchClick={searchCountry}></Filtering>
          {!loading ? <Countries className="container" data={countries}/> : "Loading..."}
        </div>
    </div>
  )
}

export default App
