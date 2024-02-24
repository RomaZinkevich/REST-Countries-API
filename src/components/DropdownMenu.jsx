import '../styles/dropdownmenu.css'
import { useState } from 'react'
import DropdownContent from './DropdownContent'

const DropdownMenu = ({filterClick}) => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="dropdown">
        <button className="dropbtn" onClick={toggleMenu}>Filter by Region</button>
        { open && <DropdownContent filterClick={filterClick}/>}

    </div>
  )
}

export default DropdownMenu