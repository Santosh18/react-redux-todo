import { ADD_TODO } from '../../actions/type'
export const todoReducer = (state = [], action) => {

  if(action.type === ADD_TODO)
    return [...state, action.payload]
    
  return state
}