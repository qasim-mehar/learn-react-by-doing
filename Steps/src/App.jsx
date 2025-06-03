
import { useState } from 'react';
import './index.css'
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step,setStep]=useState(1);
  const [isOpen,setOpen]=useState(true);
  // let step=1;
  function stepNext() {
    if(step<3){
      setStep((curStep)=>curStep+1);
    }

  }
  function stepPrevious() {
    if(step>1){
      setStep((curStep)=>curStep-1);
    }
  }
  return(
    <>
      <button onClick={()=>setOpen((open)=>!open)} className='close'>&times;</button>
    {isOpen && (
    <div className='steps'>
      <div className="numbers">
       <div className={`${step >= 1 ?"active":""}`}>1</div>
       <div className={`${step >= 2 ?"active":""}`}>2</div>
       <div className={`${step >= 3 ?"active":""}`}>3</div>
      </div>

      <p className="message">
         Step {step} : {messages[step-1]}
      </p>

      <div className="buttons">
        <Button bgColor={"#7950f2"} color={"#fff"} onClick={stepPrevious}>
          previous 👈
          </Button>
      
        <Button bgColor={"#7950f2"} color={"#fff"} onClick={stepNext}>
          next 👉
        </Button>
    

      </div>
    </div>
    )}
    </>
  )
  
}

function Button({bgColor, textColor, onClick, children} ){
  return(
    <button style={{backgroundColor: bgColor, color:textColor}} onClick={onClick} >
       {children}
    </button>
  )
}
export default App
