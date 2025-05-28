// import { useState } from 'react'

// import { useState } from 'react'
import { useState } from 'react';
import './index.css'


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 2, packed: false }
];


function App(){
  // const [items,setItem]=useState(0);
 
 return (
 <>
           <Logo/>
          <Form/>
          <PackingList/>
          <Stats />
 </>
        
 )
}
function Logo(){
  return(
    <h1>Far Away</h1>
    
  )
}


function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(description);
    console.log(quantity);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want to add?</h3>

      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 10 }, (_, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

function PackingList(){
  return(
  
       <ul className="list">
        {initialItems.map(item=> <List key={item.id} item={item} />)}
        {/* {initialItems.map(item=> console.log(item))} */}
       </ul>
    
  )
}

function List({item}){ //we simply accepting a an item object inside an object so we simply  destructured here in the bracket notation
  const{id,description,quantity,packed}=item; //we further destructured it so we can simply use values cleanly.
return(
  <li   >
      <button>❌</button>
      <span style={packed?{textDecoration: "line-through"}:{}}>{quantity} <strong>{description}</strong></span>
       
      <input type="checkbox" name="check" id={id} />
  </li>
)
}
function Stats(props){
  // console.log(props)
  return(
    <footer>
      {`you have ${props.items} items and You already packed X`}
    </footer>
  )
}

export default App
