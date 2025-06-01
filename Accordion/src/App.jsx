import { useState } from 'react'
import './App.css'

 const faqs = [
  {
    number: 1,
    title: "What is TripTote?",
    text: "TripTote is a lightweight React app that helps you manage your travel essentials — add, pack, or remove items with ease."
  },
  {
    number: 2,
    title: "Why use it?",
    text: "Packing for trips can be stressful. TripTote simplifies this by organizing your checklist in a smart, interactive way."
  },
  {
    number: 3,
    title: "What can I do?",
    text: "You can add new items, mark them as packed when ready, and delete anything you no longer need."
  },
  {
    number: 4,
    title: "What did I learn?",
    text: "TripTote helped me master React concepts like state, props, state lifting, conditional rendering, and state management."
  }
];
function App() {
  

  return (
   <Accordion faqs={faqs}/>
  )
}
function Accordion({faqs}){
  return(
    <div className="accordion">
    {faqs.map((item,i)=><AccordionItems num={i>9 ?i+1: `0${i}` } title={item.title} text={item.text}/>)}
     </div>
  )
}

export default App
