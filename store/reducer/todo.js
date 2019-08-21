import { ADD_TODO } from '../../actions/type'
export const todoReducer = (state = [], action) => {

  if(action.type === ADD_TODO) {
    return [...state, action.payload]
  }

  if(action.type === 'DELETE') { 
      //return [...state, this.props.todos.splice(i, 1) ]
     // tempVar = [...state];
     console.log(action.payload);
      state.splice(action.payload,1);
      return [ state.splice(0,1)];
  }
    
  return state
}