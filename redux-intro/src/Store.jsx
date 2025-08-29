import { applyMiddleware, combineReducers, createStore} from 'redux'
import { customerReducer } from './features/customer/CustomerSlice';
import { accountReducer } from './features/account/AccountSlice';
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from 'redux-thunk'

const rootReducer=combineReducers({
    account:accountReducer,
    customer:customerReducer
});

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export {store};