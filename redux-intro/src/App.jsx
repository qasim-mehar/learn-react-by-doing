import Customer from "./features/customer/Customer";
import AccountOperations from "./features/account/AccountOperations"
import CreateCustomer from "./features/customer/CreateCustomer";
import BalanceDisplay from "./features/account/BalanceDisplay"
import { useSelector } from "react-redux";



function App() {
  const customerName=useSelector(state=>state.customer.fullName)
  console.log(customerName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!customerName? (<CreateCustomer />):
     (<>
     <Customer />
      <AccountOperations />
      <BalanceDisplay />
     </>)}
      
    </div>
  );
}

export default App;
