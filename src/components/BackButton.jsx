import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import '../styles/backbutton.css'

const BackButton = () => {
  return (
    <Link to={`/`} className="btn">
        <FontAwesomeIcon icon={faArrowLeft} />
        <button>Back</button>
    </Link>
  )
}

export default BackButton