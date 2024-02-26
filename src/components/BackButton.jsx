import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/backbutton.css'

const BackButton = ({btnHandler}) => {
  return (
    <div onClick={btnHandler} className="btn">
        <FontAwesomeIcon icon={faArrowLeft} />
        <button>Back</button>
    </div>
  )
}

export default BackButton