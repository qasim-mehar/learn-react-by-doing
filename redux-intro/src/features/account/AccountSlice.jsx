import { store } from "../../Store";
const accountInitialState={
    balance:0,
    loan:0,
    loanPurpose:"",
}
export function accountReducer(state=accountInitialState, action){
switch (action.type) {
    case "account/deposite":
        return {
            ...state,
            balance:state.balance+action.payload.amount,
        }
    case "account/withdraw":
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
    case "payLoan":
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
export function deposite(amount){
    store.dispatch({type:"account/deposite", payload:{amount}})
}

export function withdraw(amount){
    store.dispatch({type:"account/withdraw", payload:{amount}})
}

export function requestLoan(amount, purpose){
    store.dispatch({type:"requestLoan", payload:{amount,purpose}})
}

export function payLoad(){
  store.dispatch({type:"payLoan"});
}
