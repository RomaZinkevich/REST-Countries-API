const DropdownItem = ({itemClick, title}) => {
  return (
    <p onClick={()=>itemClick(title)}>{title}</p>
  )
}

export default DropdownItem