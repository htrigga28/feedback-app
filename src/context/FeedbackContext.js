import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext()
 
export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const[feedback, setFeedback] = useState([])    
  
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  }    
  )

  useEffect( ()=> {
    fetchFeedback()
  }
  , [])

  const fetchFeedback = async () => {
    const response = await fetch(`https://my-json-server.typicode.com/htrigga28/feedback-app/feedback?_sort=id&_order=asc`)

    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('https://my-json-server.typicode.com/htrigga28/feedback-app/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(newFeedback)
    })
    const data = await response.json()
    setFeedback([data, ...feedback])
  }  
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit:true
    })    
  }
  const updateFeedback =  async (id, updItem) => {
    const response = await fetch(`https://my-json-server.typicode.com/htrigga28/feedback-app/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem)
    })
    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? {...item, ...data} : item))
    )
  }

  const deleteFeedback = async (id) => {
    if(window.confirm('are you sure you want to delete?')) {
      await fetch(`https://my-json-server.typicode.com/htrigga28/feedback-app/feedback/${id}`, {method: 'DELETE' })
      setFeedback(feedback.filter((item) => item.id !== id ))
    }

  }

  return <FeedbackContext.Provider value={{
    feedback,
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext