import Header from "./Header"
import Countries from "./Countries"
import { useState, useEffect } from "react"

function App() {
const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      const countriesFromServer = await fetchCountries()
      setCountries(countriesFromServer)
    }

    getCountries()
  }, [])

  //Fetching data from API
  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = await res.json()

    return data
  }


  return (
    <div>
        <Header />
          <div className="container">
          <Countries className="container" data={countries}/>
        </div>
    </div>
  )
}

export default App
