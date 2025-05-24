import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [advice,setAdvice]=useState("");
    async function getAdvice() {
      const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    }
   useEffect(function(){
       getAdvice();
   },[])

  return (
    <> 
    <div class="container mx-auto max-w-2xl">
        <div class="advice-card bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20">
            <div class="text-center mb-6">
                <h1 class="text-2xl font-bold text-white mb-2">✨ Wisdom Generator ✨</h1>
                <p class="text-white/80">Get personalized advice for your daily life</p>
            </div>
            
            <div class="advice-container min-h-40 flex items-center justify-center mb-8">
                <p id="advice" class="advice-text text-white text-xl md:text-2xl font-medium text-center px-4 py-6 transition-all duration-300">{advice}</p>
            </div>
            
            <div class="flex flex-col items-center">
                <button onClick={getAdvice} id="adviceBtn" class="btn-advice pulse bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2">
                    <i class="fas fa-lightbulb"></i>
                    Generate Advice
                </button>
                
                <Message count={count}/>
            </div>
        </div>
    </div>

      
    </>
  )
}
function Message(props){
  return(
      <div id="message" class="count-badge mt-6 bg-black/20 text-white/90 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <i class="fas fa-chart-line"></i>
                    <span id="count">{props.count}</span> pieces of wisdom generated
                </div>
  )
 
}
export default App
