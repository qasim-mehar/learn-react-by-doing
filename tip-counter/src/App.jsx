import {  useState } from 'react'

import './App.css'

function App() {
  const [netBill, setNetBill] = useState(" ");
  const [userTip, setUserTip] = useState(" ");
  const [friendTip, setFriendTip] = useState(" ");
   return(
   <>
     <BillField handleBill={setNetBill}/>
     <br />
     <Tip handleTip={setUserTip}>How much did you like the service? </Tip>
     <Tip handleTip={setFriendTip}>How much did Your friend like the service? </Tip>
   </>
   )
  
}
function BillField({handleBill}){

  return(
  <>
     <label For="Bill">Enter Your total bill </label>
      <input onChange={e=>handleBill(e.target.value)} type="number" />
  </>
    
  )
}
function Tip({handleTip,children}){

  return(
    <>
     <label  >{children}</label>
     <select onChange={e=> handleTip(Number(e.target.value))} name="" id="">
      <option value="0">Bad 0%</option>
      <option value="5">okay okay 5%</option>
      <option value="10">Good 10%</option>
      <option value="20">Great 20%</option>
     </select>
    </>
  )
}
export default App
