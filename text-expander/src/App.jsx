import { useState } from 'react'
import './App.css'

function App() {
  return(
    <>
       <TextExpander expanded={true} collapseNumWords={20}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam itaque numquam assumenda asperiores earum ducimus, perferendis dolores sint omnis recusandae ab nesciunt soluta sequi accusantium possimus fugit minus ut.</TextExpander>

       <TextExpander expandBtnText="Show More" >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ab impedit! In cumque numquam consectetur id sapiente dolorem reiciendis, et rerum repellendus voluptas a tempore modi molestiae soluta deleniti, quae harum vel nobis magni! Exercitationem dolores, porro amet rem consequuntur labore eaque ex quod ducimus praesentium saepe consectetur, blanditiis impedit?
      </TextExpander>

       <TextExpander collapseBtnText={"Show Less"} collapseNumWords={16} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti id iste? Libero, harum tempora nostrum, omnis iure neque, a animi quisquam exercitationem voluptate placeat laudantium error! Laudantium, consequuntur inventore?</TextExpander>
    </>
  )
  
}
function TextExpander({
  children,
  expanded=false,
  collapseBtnText="Show Less",
  expandBtnText="Show More",
  collapseNumWords=10,
}){
  const [isExpanded, setIsExpanded]=useState(expanded);
 return(
   <p>
      <span>
          {isExpanded? children:`${children.split(' ')
          .splice(0 , collapseNumWords).join(' ')}... `}
      </span>
     
      <button onClick={()=>setIsExpanded(exp=>!exp)}>
        {isExpanded?collapseBtnText:expandBtnText}
      </button>
   </p>
 )
}

export default App
