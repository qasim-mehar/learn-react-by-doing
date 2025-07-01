import {  useState } from 'react'

import './App.css'

function App() {
  const [netBill, setNetBill] = useState(" ");
   return(
   <>
     <BillField handleBill={setNetBill}/>
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
export default App
