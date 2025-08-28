const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading:false,
};

export function accountReducer(state = accountInitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading:false
      };

    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload.amount,
      };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };

    case "account/payLoan":
      if (state.balance < state.loan) return state; // not enough money
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    case "account/convertingCurrency":
      return{
        ...state,
        isLoading:true,
      }

    default:
      return state;
  }
}

// Action creators
export function deposit(amount,currency) {
  if(currency=='USD') return { type: "account/deposit", payload:amount};

  return async function(dispatch,getState){
    dispatch({type:"account/convertingCurrency"})
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
    console.log(res);
    const data=await res.json();
    const converted =data.rates.USD;
    console.log(converted);
    dispatch({ type: "account/deposit", payload:converted })

  }
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: { amount } };
}

export function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

export function payLoan() {
  return { type: "account/payLoan" };
}
