import { ADD_TODO } from '../../actions/type'
export const todoReducer = (state = [], action) => {

  if(action.type === ADD_TODO) {
    return [...state, action.payload]
  }

  if(action.type === 'DELETE') { 
      //return [...state, this.props.todos.splice(i, 1) ]
      tempVar = [...state];
      this.tempVar.splice(action.payload.i,1);
      this.setState(this.tempVar);
  }
    
  return state
}