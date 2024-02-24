import '../styles/dropdowncontent.css'
import DropdownItem from './DropdownItem'

const DropdownContent = ({filterClick}) => {
  return (
    <div className="dropdown-content">
        <DropdownItem click={filterClick} title="Africa"/>
        <DropdownItem click={filterClick} title="America"/>
        <DropdownItem click={filterClick} title="Asia"/>
        <DropdownItem click={filterClick} title="Europe"/>
        <DropdownItem click={filterClick} title="Oceania"/>
    </div>
  )
}

export default DropdownContent