import '../styles/dropdowncontent.css'
import DropdownItem from './DropdownItem'

const DropdownContent = ({itemClick}) => {
  return (
    <div className="dropdown-content">
        <DropdownItem itemClick={itemClick} title="Africa"/>
        <DropdownItem itemClick={itemClick} title="America"/>
        <DropdownItem itemClick={itemClick} title="Asia"/>
        <DropdownItem itemClick={itemClick} title="Europe"/>
        <DropdownItem itemClick={itemClick} title="Oceania"/>
    </div>
  )
}

export default DropdownContent