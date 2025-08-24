### useEffect 
is a hook to define a default state.


### React vs Js
 React takes care of syncing data to user interface meanwhile in js we have explicitly and manualy update DOM elements.
 React reacts to the state changes all time to keep the UI sync with the data.
 E.g:
 React rendors UI with the initial State after chnages in state it automatically change the UI to sync data with UI.
 ### JSX
 jsx basically is declarative syntax which mean we dont have to explainn react "How to do" a perticular task but what task to do.
 it a expression it means it always return something.
 if we need to write js in jsx we have to use {js code} and we only use expression inside {only expression} and never a statement.
 ### Component
 Component is a building block of React apps. It basically is a function which we use to create a one single component in react app.
 Component is responsible for data, interface and login.
 ### Data
 this data in component in basically consist on Props and states.
 State basically is internal data of a component which can be updated by the component's logic.
 while, Props are data which is transfer to child component and read only. and can only changed by parent component.


 ### Props 
 props stands for properties and it basically is a object which we pass to a component to transfer data. Its a

 ### Note:
 Props are Immutable and read only but if you want mutable data you need states
 why? Because props are basically objects and if we try to mutate a obj in child compoenent it will try to mutate the object outside of the function which we dont want because it creates side effects.

 ### React Fragments
 ### useState
 is a hook which is a array which returns the state itself and a state setter method.
 it's "Component's memory" which means it's hold the memory/state of component even after re-rendoring. Most Importanly a every component should have it's own state, means ONE COMPONENT, ONE STATE
 
 ### LOCAL VS GLOBAL STATE:
 Local satet

 ### Children prop:
 it the content in between opening and closing tag of element in parent component which is automatically onherited to child component. we use a predefined keyword "children"
 <element> Child prob content</element>
 
 useReducer hook:
 it just like a useState hook but for more complex  values to handle like objects instead of a single value.
 when and why to use:
 - when there are a lots of state variables and state updates spread across all over the the componenet and eventhandelers.
 - when a multiple state needs to be update at the same time. like on start the game btn set the score to zero, number of lives and reset timer
 - when updating one piece of state is depend of other multiple piece of state.
 why name reducer? bec it just accumulate all the action in a single state update just like array.reduce()


const withdrawal_amount=50;
const diposite_amount=150;
const loan_amount=5000;
function reducer(state,action){
 switch (action.type) {
  case "openAccount":
    return{
      ...state,
      balance:500,
      isActive:true,
    }
  case "diposite":
    return {
      ...state,
      balance:state.balance+diposite_amount,
    }
  case "withdraw":
    return{
      ...state,
      balance:state.balance>=withdrawal_amount?state.balance-withdrawal_amount:state.balance,
    }
  case "loan":
    return{
      ...state,
      loan:state.loan?state.loan:state.loan+loan_amount,
      balance:state.loan?state.balance:state.balance+loan_amount

    }
  case "closeAccount":
    {
      const isClosable=state.loan==0 && state.balance>0;
    return{
      ...state,
      isActive:!isClosable,
      balance:isClosable ? 0 : state.balance,
    }}
    
    break;
 
  default:
    break;
 }
}