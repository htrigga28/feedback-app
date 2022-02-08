import { FaTimes, FaPencilAlt } from "react-icons/fa"
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackItem({item, handleDelete}) {
    const{deleteFeedback, editFeedback} = useContext(FeedbackContext)


  return (
      <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={ () => deleteFeedback(item.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaPencilAlt color="purple" />
        </button>
        <div className="text-display">
          {item.text}
        </div>        
      </Card>   
  )
}

export default FeedbackItem
