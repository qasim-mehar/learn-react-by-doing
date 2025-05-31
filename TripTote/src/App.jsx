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
  const [items, setItems]=useState(initialItems);

  const noOfItems=items.length;
  const packedItems=items.filter((item)=>item.packed==true).length;

  function handleItems(newItem) {
    setItems((items)=>[...items,newItem])
  }
  function handleDeleteItem(id){
    setItems((items)=>items.filter(item=>item.id!==id));
  }
  function handlePackedItem(id){
   setItems((items)=>items.map((item)=>item.id==id?{...item,packed: !item.packed}:item));
  }
  // console.log(items.length);
 
 return (
 <div className='app'>
           <Logo/>
          <Form onAddItem={handleItems}/>
          <PackingList items={items} onDeleteItem={handleDeleteItem} onPackedItem={handlePackedItem}/>
          <Stats noOfItems={noOfItems} packedItems={packedItems} />
 </div>
        
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
   if(!description) return;
    const newItem={
     id:new Date().getMilliseconds(),
     description,
     quantity,
     packed:false
    }
    onAddItem(newItem);
     setDescription("");
     setQuantity(1);
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

function PackingList({items,onDeleteItem,onPackedItem}){
  const [sortBy, setSortBy]=useState("value")
  let sortedItem;
  function sortItem(sortBy){
     if (sortBy=="value") sortedItem=items;
     if(sortBy=="description") sortedItem=items.slice().sort((a,b )=>a.description.localeCompare(b.description));
     if(sortBy=="packed") sortedItem=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
  }
  sortItem(sortBy);
  return(
        <div className="list">
          <ul >
             {sortedItem.map(item=> <List key={item.id} item={item} onDeleteItem={onDeleteItem} onPackedItem={onPackedItem}/>)}
            
          </ul>
          <div className="actions">
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
              <option value="value">sort by value</option>
              <option value="description">sort by description</option>
              <option value="packed">sort by packed</option>
            </select>
          </div>
        </div>
    
  )
}

function List({item, onDeleteItem, onPackedItem}){ //we simply accepting a an item object inside an object so we simply  destructured here in the bracket notation
  const{id,description,quantity,packed}=item; //we further destructured it so we can simply use values cleanly.
  function handlePackedItem(id){
  onPackedItem(id);
  }
  return(
  <li key={id}>
      <input checked={packed} onChange={()=>handlePackedItem(id)} type="checkbox"   />
      <span style={packed?{textDecoration: "line-through"}:{}}>{quantity} <strong>{description}</strong></span>
      <button onClick={()=>onDeleteItem(id)}>❌</button>
       
  </li>
)
}
function Stats({noOfItems,packedItems}){
  if(!noOfItems){
    return(
      <footer className='stats'>
      {`Start Adding Items to your packing list`}
    </footer>
    )
  }
  return(
    <footer className='stats'>
      
      {`you have ${noOfItems}  items and You already packed ${packedItems} `}
    </footer>
  )
}

export default App
