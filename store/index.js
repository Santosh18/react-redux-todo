import { todoReducer } from './reducer';
import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware }  from 'redux';
const cr = combineReducers({
  todoState : todoReducer
});
export const makeStore = () => createStore(cr,applyMiddleware(thunk));