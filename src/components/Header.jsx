import { Link } from "react-router-dom"
import '../styles/header.css'

const Header = ({className, themeSwitch}) => {
  return (
    <header className={className}>
        <h1><Link to={`/REST-Countries-API/`}>Where in the world?</Link></h1>
        <div className="mode-switch" onClick={themeSwitch}>
            <img src={className==="light" ? "https://www.svgrepo.com/show/79251/crescent-moon.svg" : "https://img.icons8.com/ios-glyphs/30/FFFFFF/moon-symbol.png"} />
            <p>{className==="light" ? "Dark Mode" : "Light Mode"}</p>
        </div>
    </header>
  )
}

export default Header