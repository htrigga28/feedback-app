import {motion, AnimatePresence} from 'framer-motion' 
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackList() {
  const{feedback} = useContext(FeedbackContext)

  if(!feedback || feedback === 0){
    return <p> No feedback yet</p>
  }
  return (
    <div>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))
      }
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList;
