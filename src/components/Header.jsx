import { Link } from "react-router-dom"
import '../styles/header.css'

const Header = () => {
  return (
    <header>
        <h1><Link to={`/`}>Where in the world?</Link></h1>
        <div className="mode-switch">
            <img src="https://www.svgrepo.com/show/79251/crescent-moon.svg" />
            <p>Dark Mode</p>
        </div>
    </header>
  )
}

export default Header