import Country from "./Country"

const Countries = ({data}) => {
  return (
    <div className="countries">
      {data.map((item, index) =>
        (<Country key={index} country={item}/>)
      )}
    </div>
  )
}

export default Countries