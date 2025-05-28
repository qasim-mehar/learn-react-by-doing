import { useState } from 'react';
import './App.css';

function App() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);

 const todayDate = new Date("7 Jan 2034");


  const shiftedDate = new Date();
  shiftedDate.setDate(todayDate.getDate() + count);

  const day = days[shiftedDate.getDay()];
  const date = shiftedDate.getDate();
  const month = months[shiftedDate.getMonth()];
  const year = shiftedDate.getFullYear();

  const message =
    count === 0
      ? `Today is ${day}, ${month} ${date}, ${year}`
      : count > 0
      ? `${count} day(s) from now will be ${day}, ${month} ${date}, ${year}`
      : `${Math.abs(count)} day(s) ago was ${day}, ${month} ${date}, ${year}`;

     

  function countUp() {
      setCount((prev) => prev + range);
  }

  function countDown() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="app-container">
      <div className="steps"> 
        <span>1</span>
        <input type="range" min="1" max="10" value={range} onChange={(e)=>setRange(Number(e.target.value))} /> 
        <span>10</span>
      </div>
      <span>{range}</span>

      <div className="count">
        <button onClick={countUp}>+</button>
        <input type="number" value={count} onChange={(e)=>setCount(Number(e.target.value))} />
        <button onClick={countDown}>-</button>
      </div>
      <div className="message">{message}</div>
      <button onClick={()=>{
        setCount(0);
        setRange(1);
      }}>Reset</button>
    </div>
  );
}

export default App;
