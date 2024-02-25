import '../styles/dropdownmenu.css'
import { useState } from 'react'
import DropdownContent from './DropdownContent'

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
        <p className="dropbtn" onClick={toggleMenu}>{btnTitle}</p>
        { open && <DropdownContent itemClick={dropdownClick}/>}
    </div>
  )
}

export default DropdownMenu