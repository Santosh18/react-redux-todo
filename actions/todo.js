import { ADD_TODO } from './type'
import axios from 'axios';

export const add = (text) => {
  return { type: ADD_TODO, payload: text };
}

// export const delete = (i) => {
//   return { type: 'DELETE', payload: i };
// }

export const del = (id) => async (dispatch, getState) => {
  console.log('deleting todo');
  var response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  dispatch({type: 'DELETE', payload: id});
}

export const loadTodoList = () => async (dispatch, getState) => {
  var response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  dispatch({type: 'TODO_LOADED', payload: response.data})
}
