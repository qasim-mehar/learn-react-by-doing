import { useState } from 'react'

import './index.css'

function App(){}
function logo(){
  return(
    <h1>Far Away</h1>
  )
}
function Form(){
  return(
    <div className="add-form">
        <h3>What do you want to add?</h3>
    </div>
  )
}
function PackingList(){
  return(
    <div className="list">
      List
    </div>
  )
}
function Stats(){
  return(
    <footer>
      you have X items and You already packed X
    </footer>
  )
}

export default App
