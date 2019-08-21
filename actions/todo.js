import { ADD_TODO } from './type'

export const add = (text) => {
  return { type: ADD_TODO, payload: text };
}

// export const delete = (i) => {
//   return { type: 'DELETE', payload: i };
// }

export const del = (i) => {
  return { type: 'DELETE', payload: i };
}
