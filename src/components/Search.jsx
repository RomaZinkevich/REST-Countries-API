import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../styles/search.css'

const Search = ({searchClick}) => {

  const handleInputChange = (event) => {
    const value = event.target.value;
    searchClick(value)
  };

  return (
    <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search for a country..." onChange={handleInputChange}/>
    </div>
  )
}

export default Search