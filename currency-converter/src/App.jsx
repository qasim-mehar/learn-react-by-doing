import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [currency, setCurrency]=useState(1);
  const [baseCurrencyType, setBaseCurrencyType]=useState(" ")
  const [toConvertInCurrencyType, setToConvertInCurrencyType]=useState(" ")
  
  function handelBaseValue(e){
    setCurrency(e.target.value)
  }
  function handleBaseCurrencyType(e){
    setBaseCurrencyType(e.target.value)
  }
  function handleToConvertType(e){
    setToConvertInCurrencyType(e.target.value);
  }
  useEffect (function(){
    
    async function getConverterValue() {
      const res=await fetch(`https://api.frankfurter.app/latest?amount=${currency}&from=${baseCurrencyType}&to=${toConvertInCurrencyType}`);
      const data= await res.json();
    }
    getConverterValue();
  },[currency,baseCurrencyType,toConvertInCurrencyType])
  return (
    <div>
      <input value={currency} onChange={handelBaseValue} type="text" />
      <select value={baseCurrencyType} onChange={handleBaseCurrencyType}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toConvertInCurrencyType} onChange={handleToConvertType}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}

export default App
