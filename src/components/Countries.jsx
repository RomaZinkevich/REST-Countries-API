import Country from "./Country"
import '../styles/countries.css'

const Countries = ({data}) => {
  console.log(data)
  return (
    <div className="countries">
      {data.map((item, index) =>
        (<Country key={index} country={item}/>)
      )}
    </div>
  )
}

export default Countries