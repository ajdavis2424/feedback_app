// APP/GLOBAL STATE IS HERE
import { useState } from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';


function App() {
  //{/* Props can be passed through a component like Header (text is the prop----- must be causght in the component in Header.jsx) */}
  const[feedback, setFeedback] = useState()
  return (
  <>
  <Header bgColor='red' textColor='blue'/>
  <div className='container'>
    <FeedbackItem />
  </div>
  </>
  )
}

export default App;
