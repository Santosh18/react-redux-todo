import { ADD_TODO } from './type'
import axios from 'axios';

// export const add = (text) => {
//   return { type: ADD_TODO, payload: text };
// }

// export const delete = (i) => {
//   return { type: 'DELETE', payload: i };
// }
export const add  = (task) => async (dispatch, getState) => {
let response = await axios.post('https://jsonplaceholder.typicode.com/posts',
  {
    title: task,
    body: task,
    userId: 1
  });
  console.log('response', response.data);
  dispatch({type: ADD_TODO, payload: response.data})
}
export const del = (id) => async (dispatch, getState) => {
  console.log('deleting todo');
  let response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  dispatch({type: 'DELETE', payload: id});
}

export const loadTodoList = () => async (dispatch, getState) => {
  let response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  dispatch({type: 'TODO_LOADED', payload: response.data})
}
