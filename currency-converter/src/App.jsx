import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [currency, setCurrency]=useState(1);
  const [baseCurrencyType, setBaseCurrencyType]=useState("USD")
  const [toConvertInCurrencyType, setToConvertInCurrencyType]=useState("EUR")
  const [convertedValue, setConvertedValue]=useState(0);
  const [errorMessage,setErrorMessage]=useState("");
  
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
      setErrorMessage('');
      
      try{
        if(baseCurrencyType===toConvertInCurrencyType){
       throw new Error("Bad pair, Enter two different value");
       
      }
        const res=await fetch(`https://api.frankfurter.app/latest?amount=${currency}&from=${baseCurrencyType}&to=${toConvertInCurrencyType}`);
      console.log(res);
      if(!res.ok){
        throw new Error("Something went wrong");
      }

      const data= await res.json();
      const obj= data?.rates;
      const firstKey = Object?.keys(obj)[0];
      const firstValue = obj[firstKey];
      setConvertedValue(firstValue);}
      catch(err){
        console.log(err.message);
        setErrorMessage(err.message);
      }
    }
    getConverterValue();
    return()=>{
      setConvertedValue(0);
      setErrorMessage(""); 
    }
  },[baseCurrencyType,currency,toConvertInCurrencyType])
  return (
    <div>
      <input value={currency} onChange={handelBaseValue} type="number"/>
      <br />
      <br />
      <select value={baseCurrencyType} onChange={handleBaseCurrencyType}>
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>
      <label> To </label>
      <select value={toConvertInCurrencyType} onChange={handleToConvertType}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {/* <p>Output: {convertedValue}</p> */}
      {errorMessage?<p>{errorMessage}</p>:<p>Output: {convertedValue}</p>}
      
    </div>
  );
}

export default App
