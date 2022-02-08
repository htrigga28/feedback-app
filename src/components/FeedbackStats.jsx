import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackStats({}) {
  const{feedback} = useContext(FeedbackContext)

  const ratingSum = feedback.reduce((acc, cur) => acc + cur.rating, 0 )
  let avg = ratingSum/feedback.length
  avg = avg.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4> {isNaN(avg) ? `Add some reviews` : `Average rating: ${avg}`}</h4>
    </div>
    
  )
  ;
}

export default FeedbackStats;
