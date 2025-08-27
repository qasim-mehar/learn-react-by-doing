import { combineReducers, createStore} from 'redux'
import { customerReducer } from './features/customer/CustomerSlice';
import { accountReducer } from './features/account/AccountSlice';

const rootReducer=combineReducers({
    account:accountReducer,
    customer:customerReducer
});

const store=createStore(rootReducer);

export {store};