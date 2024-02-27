import Header from "./Header"
import Countries from "./Countries"
import Filtering from "./Filtering"
import { useState, useEffect } from "react"

function App() {
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState("light")

  let content;

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true)
      const countriesFromServer = await fetchCountries("all")
      setCountries(countriesFromServer)
      setLoading(false)
    }

    let currentTheme = localStorage.getItem("theme")
    if (currentTheme) setTheme(currentTheme)
    getCountries()
  }, [])

  //Fetching data from API
  const fetchCountries = async (link) => {
    link = `https://restcountries.com/v3.1/${link}`
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

  const toggleTheme = () => {
    let currentTheme = theme === "light" ? "dark" : "light"
    setTheme(currentTheme)
    localStorage.setItem('theme', currentTheme);
  }

  if (loading) content="Loading..."
  else if (countries.status) content="No countries found ;<"
  else content = <Countries className={theme} data={countries}/>

  return (
    <div className={`main-container ${theme}`}>
        <Header className={theme} themeSwitch={toggleTheme}/>
        <div className="container">
          <Filtering className={theme} filterClick={filterClick} searchClick={searchCountry}></Filtering>
          {content}
        </div>
    </div>
  )
}

export default App
