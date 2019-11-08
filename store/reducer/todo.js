import { ADD_TODO } from '../../actions/type'
export const todoReducer = (state = [], action) => {

  if(action.type === ADD_TODO) {
    return [...state, action.payload]
  }

  if(action.type === 'DELETE') {
    return state.filter(i=> i.id !== action.payload)
  }

  if(action.type === 'TODO_LOADED') {
    return action.payload;
  }
    
  return state
}