import '../styles/header.css'

const Header = () => {
  return (
    <header>
        <h1>Where in the world?</h1>
        <div className="mode-switch">
            <img src="https://www.svgrepo.com/show/79251/crescent-moon.svg" />
            <p>Dark Mode</p>
        </div>
    </header>
  )
}

export default Header