import React from 'react';
import { connect } from 'react-redux'

class TodoListComponet extends React.Component {
  state = { text: this.props.todos };
  deleteTask = (e,i) => {
    this.props.todos.splice(i, 1);
     this.setState({text : this.state.todos});
  }
  render() {
    return (
      <div>
        <p>List ({this.props.todos.length})</p>
        {this.props.todos.map((x,i)=> 
        <ul>
          <li>{x}
            <button onClick={(e) => this.deleteTask(e,i)}>Delete{i}</button>
          </li>
        </ul>)}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { todos: state.todoState }
}
export default connect(mapStateToProps)(TodoListComponet)