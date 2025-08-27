// features/customer/CustomerSlice.jsx

const customerInitialState = {
  fullName: "",
  creationTime: "",
  nationalID: ""
};

export function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        creationTime: action.payload.creationTime,
      };
    case "customer/updateFullName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}

// ✅ Action creators (no store import here)
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      creationTime: new Date().toISOString(),
      fullName,
      nationalID,
    },
  };
}

export function updateFullName(fullName) {
  return {
    type: "customer/updateFullName",
    payload: { fullName },
  };
}
