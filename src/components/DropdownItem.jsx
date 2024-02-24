const DropdownItem = ({title, click}) => {
  return (
    <p onClick={()=>click(title)}>{title}</p>
  )
}

export default DropdownItem