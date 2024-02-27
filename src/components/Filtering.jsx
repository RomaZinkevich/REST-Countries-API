import DropdownMenu from "./DropdownMenu"
import Search from "./Search"
import '../styles/filtering.css'

const Filtering = ({className, filterClick, searchClick}) => {
  return (
    <div className={`filtering ${className}`}>
        <Search searchClick={searchClick}/>
        <DropdownMenu filterClick={filterClick}/>
    </div>
  )
}

export default Filtering