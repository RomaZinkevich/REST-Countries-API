import DropdownMenu from "./DropdownMenu"
import Search from "./Search"
import '../styles/filtering.css'

const Filtering = ({filterClick, searchClick}) => {
  return (
    <div className="filtering">
        <Search searchClick={searchClick}/>
        <DropdownMenu filterClick={filterClick}/>
    </div>
  )
}

export default Filtering