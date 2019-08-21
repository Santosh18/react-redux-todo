import React from 'react';
import { connect } from 'react-redux'

class TodoListComponet extends React.Component {
  render() {
    return (
      <div>
        <p>List ({this.props.todos.length})</p>
        {this.props.todos.map((x,i)=> 
        <ul>
          <li>{x}<button>Delete{i}</button></li>
        </ul>)}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { todos: state.todoState }
}
export default connect(mapStateToProps)(TodoListComponet)