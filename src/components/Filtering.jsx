import DropdownMenu from "./DropdownMenu"
import '../styles/filtering.css'

const Filtering = ({filterClick}) => {
  return (
    <div className="filtering">
        <p>Search...</p>
        <DropdownMenu filterClick={filterClick}/>
    </div>
  )
}

export default Filtering