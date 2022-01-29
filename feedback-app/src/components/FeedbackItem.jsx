// Feedback component holds feedback list items
import {useState } from 'react'

function FeedbackItem() {
//   name of state is rating. function to update state is setRating
// to change state change "set"
    const[rating,setRating] = useState(7)
    const[text,setText] = useState('This is an example of a feedback item')

    // // every time button is clicked rating goes up 1
    // const handleClick = () => {
    //     setRating((prev) => {
    //         console.log(prev)
    //         return prev + 1
    //     })
    // }
  
    return <div className='card'>
      {/* rating goes below */}
      <div className="num-display"> {rating}</div>
      {/* where text will go */}
      <div className="text-display"> {text}</div>
      <button onClick={handleClick}>Click</button>
  </div>;
}

export default FeedbackItem;
