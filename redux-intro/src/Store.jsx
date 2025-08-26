import { combineReducers, createStore} from 'redux'
const accountInitialState={
    balance:0,
    loan:0,
    loanPurpose:"",
}
const CustomertInitialState={
    fullName:"",
    creationTime:"",
    nationalID:""
}

function accountReducer(state=accountInitialState, action){
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

function cutomerReducer(state=CustomertInitialState, action){
 switch (action.type) {
    case "customer/createCustomer":
        return{
            ...state,
            fullName:action.payload.fullName,
            nationalID:action.payload.nationalID,
            creationTime:action.payload.creationTime,
        }    
    case "customer/updateFullName":
        return{
            ...state,
            fullName:action.payload.fullName,
        }
    default:
        return state;
 }
}

const rootReducer=combineReducers({
    account:accountReducer,
    customer:cutomerReducer
});

const store=createStore(rootReducer);

function deposite(amount){
    store.dispatch({type:"account/deposite", payload:{amount}})
}

function withdraw(amount){
    store.dispatch({type:"account/withdraw", payload:{amount}})
}

function requestLoan(amount, purpose){
    store.dispatch({type:"requestLoan", payload:{amount,purpose}})
}

function payLoad(){
  store.dispatch({type:"payLoan"});
}

function createCustomer(fullName, nationalID){
store.dispatch({type:"customer/createCustomer", payload:{creationTime:new Date().toISOString(), fullName:fullName, nationalID:nationalID}})
}

function updateFullName(fullName){
    store.dispatch({type:"custome/updateFullName", payload:{fullName:fullName}})
}


createCustomer("Qasim", "35401");
console.log(store.getState());
