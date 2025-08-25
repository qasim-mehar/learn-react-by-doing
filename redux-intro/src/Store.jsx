import { createStore} from 'redux'
const initialState={
    balance:0,
    loan:0,
    loanPurpose:"",
}
function reducer(state=initialState, action){
switch (action.type) {
    case "transaction/deposite":
        return {
            ...state,
            balance:state.balance+action.payload.amount,
        }
    case "transaction/withdraw":
        return{
            ...state,
            balance:state.balance - action.payload.amount,
        }    
    case "requestLoan":{
           const isEligible=state.loan<0;
            return{
            ...state,
            balance:isEligible?state.balance+action.payload.amount:state.balance,
            loan:isEligible?action.payload.amount:state.loan,
            loanPurpose:isEligible?action.payload.purpose:state.loanPurpose,
        }}
    case "payloan":
        return{
            ...state,
            balance:state.balance-state.loan,
            loan:0,
            loanPurpose:""
        }
    default:
        return state
}
}
const store=createStore(reducer);
store.dispatch({type:"transaction/deposite", payload:{amount:500}});
console.log(store.getState());
store.dispatch({type:"transaction/withdraw", payload:{amount:250}})
console.log(store.getState());


