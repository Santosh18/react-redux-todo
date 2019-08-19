import { todoReducer } from './reducer';

import { createStore, combineReducers }  from 'redux';
const cr = combineReducers({
  todoState : todoReducer
});
export const makeStore = () => createStore(cr);