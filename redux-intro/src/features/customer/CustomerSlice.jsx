// features/customer/CustomerSlice.jsx

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  creationTime: "",
  nationalID: ""
};

const customerSlice=createSlice({
  name:"customer",
  initialState,
  reducers:{
    createCustomer:{
      prepare(fullName,nationalID,creationTime){
        return{
          payload:{
            fullName,
            nationalID
          }
        }
      },
      reducer(state,action){
       state.fullName=action.payload.fullName;
        state.nationalID= action.payload.nationalID
        state.creationTime=action.payload.creationTime
      },
      updateFullname(state,action){
        state.fullName=action.payload.fullName;
      },


  }
}})

export const {createCustomer,updateFullname}=customerSlice.actions;
export default customerSlice.reducer;
// export function customerReducer(state = customerInitialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         creationTime: action.payload.creationTime,
//       };
//     case "customer/updateFullName":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//       };
//     default:
//       return state;
//   }
// }

// // ✅ Action creators (no store import here)
// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       creationTime: new Date().toISOString(),
//       fullName,
//       nationalID,
//     },
//   };
// }

// export function updateFullName(fullName) {
//   return {
//     type: "customer/updateFullName",
//     payload: { fullName },
//   };
// }
