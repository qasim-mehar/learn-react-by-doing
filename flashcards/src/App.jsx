// import { useState } from 'react'
import { useState } from 'react';
import './App.css'

const Questions = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is a component in React?",
    answer: "A component is a reusable piece of UI that can manage its own state and logic."
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React."
  },
  {
    id: 4,
    question: "What is the useState hook?",
    answer: "useState is a React hook that lets you add and manage state in functional components."
  },
  {
    id: 5,
    question: "What is props in React?",
    answer: "Props are inputs to components. They are passed down from parent to child components."
  }
];

function App() {
  // const [count, setCount] = useState(0)

  return (
   <Flashcards/>
  )
}
function Flashcards(){
  const [slectedCard, setSelectedCard]=useState(null)
  
return(
  <div className='container'>
      {Questions.map(info=> <div  className={info.id===slectedCard?"clicked":"card"}  key={info.id} onClick={()=>setSelectedCard(info.id)}>{info.id===slectedCard?info.answer:info.question}</div>
    )}
    
  </div>
)
}

export default App
