// import { useState } from 'react'

// import { useState } from 'react'
import { useState } from 'react';
import './index.css'


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 2, packed: false }
// ];


function App(){
  const [items, setItems]=useState([]);

  function handleItems(newItem) {
    setItems((items)=>[...items,newItem])
  }
  function handleDeleteItem(id){
    setItems((items)=>items.filter(item=>item.id!==id));
  }
 
 return (
 <>
           <Logo/>
          <Form onAddItem={handleItems}/>
          <PackingList items={items} onDeleteItem={handleDeleteItem}/>
          <Stats items={items} />
 </>
        
 )
}
function Logo(){
  return(
    <h1>Far Away</h1>
    
  )
}


function Form({onAddItem}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  function handleSubmit(e) {
    e.preventDefault();

    const newItem={
     id:new Date().getMilliseconds(),
     description,
     quantity,
     packed:false
    }
    onAddItem(newItem);
    // console.log(newItem);
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

function PackingList({items,onDeleteItem}){
  
  return(
  
       <ul className="list">
        {items.map(item=> <List key={item.id} item={item} onDeleteItem={onDeleteItem} />)}
        {/* {initialItems.map(item=> console.log(item))} */}
       </ul>
    
  )
}

function List({item, onDeleteItem}){ //we simply accepting a an item object inside an object so we simply  destructured here in the bracket notation
  const{id,description,quantity,packed}=item; //we further destructured it so we can simply use values cleanly.
  
  return(
  <li   >
      <button onClick={()=>onDeleteItem(item.id)}>❌</button>
      <span style={packed?{textDecoration: "line-through"}:{}}>{quantity} <strong>{description}</strong></span>
       
      <input type="checkbox" name="check" id={id} />
  </li>
)
}
function Stats(){
  // console.log(items.id);
  // const [noOfItems, setNoOfItems]=useState(0)
  // const [packedItems, setPackedItems]=useState(0);
  // setNoOfItems(items.length+1);
  // setPackedItems((items)=>console.log(items) );
  return(
    <footer>
      {`you have  items and You already packed  `}
    </footer>
  )
}

export default App
