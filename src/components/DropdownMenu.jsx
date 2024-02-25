import '../styles/dropdownmenu.css'
import { useState } from 'react'
import DropdownContent from './DropdownContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const DropdownMenu = ({filterClick}) => {
  const [open, setOpen] = useState(false)
  const [btnTitle, setBtnTitle] = useState("Filter by Region")

  const toggleMenu = () => {
    setOpen(!open)
  }

  const dropdownClick = (title) => {
    filterClick(title)
    setBtnTitle(title)
    toggleMenu()
  }

  return (
    <div className="dropdown">
      <div className="dropbtn" onClick={toggleMenu}>
        <p>{btnTitle}</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
        { open && <DropdownContent itemClick={dropdownClick}/>}
    </div>
  )
}

export default DropdownMenu