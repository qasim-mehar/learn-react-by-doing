const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export function accountReducer(state = accountInitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
      };

    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload.amount,
      };

    case "account/requestLoan":
      if (state.loan > 0) return state; // already has a loan
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

    default:
      return state;
  }
}

// Action creators
export function deposit(amount) {
  return { type: "account/deposit", payload: { amount } };
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
