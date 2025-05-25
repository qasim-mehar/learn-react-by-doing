import { useState } from 'react';
import './App.css';

function App() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const todayDate = new Date();
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

  function stepUp() {
    setStep((prev) => prev + 1);
  }

  function stepDown() {
    if (step > 1) setStep((prev) => prev - 1);
  }

  function countUp() {
    if (count > 0 && step > 1) {
      setCount((prev) => prev * step);
    } else {
      setCount((prev) => prev + 1);
    }
  }

  function countDown() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="app-container">
      <div className="steps">
        <button onClick={stepUp}>+</button>
        step: {step}
        <button onClick={stepDown}>-</button>
      </div>
      <div className="count">
        <button onClick={countUp}>+</button>
        count: {count}
        <button onClick={countDown}>-</button>
      </div>
      <div className="message">{message}</div>
    </div>
  );
}

export default App;
