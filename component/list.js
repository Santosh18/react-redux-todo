import React from 'react';
import { connect } from 'react-redux'
import  {delete}  from '../actions/todo';


class TodoListComponet extends React.Component {
  state = { text: this.props.todos, i : 0 };
  delete = (e,i) => {
    this.setState({i : i});
    this.props.delete(this.state.i);
    // this.props.todos.splice(i, 1);
    //  this.setState({text : this.state.todos});
  }
  render() {
    return (
      <div>
        <p>List ({this.props.todos.length})</p>
        {this.props.todos.map((x,i)=> 
        <ul>
          <li>{x}
            <button onClick={(e) => this.delete(e,i)}>Delete{i}</button>
          </li>
        </ul>)}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { todos: state.todoState }
}
export default connect(mapStateToProps, {delete})(TodoListComponet)