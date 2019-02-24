import { createStore, combineReducers, applyMiddleware } from 'redux';
import uiReducers from './ui/reducers';
import { listCustomers } from './customers/actions';
import customersMiddleware from './customers/middlewares';

const reducers = combineReducers({
  ui: uiReducers,
});

const middlewares = [
  customersMiddleware,
];

const store = createStore(reducers, applyMiddleware(...middlewares));

store.dispatch(listCustomers());

export default store;
