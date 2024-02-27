import Country from "./Country"
import '../styles/countries.css'

const Countries = ({className, data}) => {
  return (
    <div className={`countries ${className}`}>
      {data.map((item, index) =>
        (<Country key={index} country={item}/>)
      )}
    </div>
  )
}

export default Countries