import {  useState } from 'react'

import './App.css'

function App() {
  const [netBill, setNetBill] = useState(" ");
  const [userTip, setUserTip] = useState(" ");
  const [friendTip, setFriendTip] = useState(" ");
  let netTip=(userTip+friendTip)/2;
   return(
   <>
     <BillField handleBill={setNetBill}/>
     <br />
     <Tip handleTip={setUserTip}>How much did you like the service? </Tip>
     <br />
     <Tip handleTip={setFriendTip}>How much did Your friend like the service? </Tip>
     <br />
     <BillInvoice netBill={netBill} netTip={netTip}/>
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
function BillInvoice({netBill, netTip}){
  return(
    netBill? <h2>{`Your total bill is ${netBill}$ (${netBill} $ +  ${netTip} $ Tip)`}</h2> : <p>No bill so far</p>
  )
}
export default App
