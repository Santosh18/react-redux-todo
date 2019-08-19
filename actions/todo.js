import { ADD_TODO } from './type'

export const add = (text) => {
  return { type: ADD_TODO, payload: text };
}
