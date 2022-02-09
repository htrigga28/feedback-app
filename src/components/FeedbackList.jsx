import {motion, AnimatePresence} from 'framer-motion' 
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';
import Spinner from './shared/Spinner';

function FeedbackList() {
  const{feedback, isLoading} = useContext(FeedbackContext)

  if(!!isLoading && (!feedback || feedback === 0)){
    return <p> No feedback yet</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
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
