import { store } from "../../Store";
const CustomertInitialState={
    fullName:"",
    creationTime:"",
    nationalID:""
}


export function customerReducer(state=CustomertInitialState, action){
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
export function createCustomer(fullName, nationalID){
store.dispatch({type:"customer/createCustomer", payload:{creationTime:new Date().toISOString(), fullName:fullName, nationalID:nationalID}})
}

export function updateFullName(fullName){
    store.dispatch({type:"custome/updateFullName", payload:{fullName:fullName}})
}
