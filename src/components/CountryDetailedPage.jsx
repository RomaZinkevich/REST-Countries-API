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
  const [ theme, setTheme ] = useState("light")
  const navigate = useNavigate();
  let content

  const backButtonHandler = () => {
    navigate(-1)
  }

  useEffect(() => {
    const getBorders = async (country) => {
      if (! country.borders) return
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

    let currentTheme = localStorage.getItem("theme")
    if (currentTheme) setTheme(currentTheme)
    getCountry()
  }, [id])


  //Fetching data from API
  const fetchCountry = async (id) => {
    let link = `https://restcountries.com/v3.1/alpha/${id}`
    const res = await fetch(link)
    const data = await res.json()

    return data[0]
  }

  const toggleTheme = () => {
    let currentTheme = theme === "light" ? "dark" : "light"
    setTheme(currentTheme)
    localStorage.setItem('theme', currentTheme);
  }

  if (loading) content="Loading..."
  else if (country.status===404) content="No countries found ;<"
  else content = <>{<CountryDetails country={country} borders={borders ? borders : null}/>}</>

  return (
    <div className={`main-container ${theme}`}>
      <Header className={theme} themeSwitch={toggleTheme}/>
      <div className={`container ${theme}`}>
        <BackButton btnHandler={backButtonHandler}/>
        {content}
      </div>
    </div>
  )
}

export default CountryDetailedPage