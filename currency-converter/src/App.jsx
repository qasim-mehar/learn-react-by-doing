import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [currency, setCurrency]=useState(1);
  const [baseCurrencyType, setBaseCurrencyType]=useState("USD")
  const [toConvertInCurrencyType, setToConvertInCurrencyType]=useState("EUR")
  const [convertedValue, setConvertedValue]=useState(0);
  
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
      const obj= data?.rates;
      
      const firstKey = Object?.keys(obj)[0];
        const firstValue = obj[firstKey];
      setConvertedValue(firstValue);
      
    }
    getConverterValue();
  },[baseCurrencyType,currency,toConvertInCurrencyType])
  return (
    <div>
      <input value={currency} onChange={handelBaseValue} type="text" />
      <select value={baseCurrencyType} onChange={handleBaseCurrencyType}>
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>
      <select value={toConvertInCurrencyType} onChange={handleToConvertType}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>Output: {convertedValue }</p>
    </div>
  );
}

export default App
