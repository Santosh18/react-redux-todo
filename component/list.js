import React from 'react';
import { connect } from 'react-redux'
import  {del, loadTodoList }  from '../actions/todo';


class TodoListComponet extends React.Component {
  state = { text: this.props.todos, i : 0 };
  del = async (id) => {
    this.props.del(id);
  }
  async componentDidMount() {
   await this.props.loadTodoList();
  }

  render() {
    return (
      <div>
        <p>List ({this.props.todos.length})</p>
        {this.props.todos.map((x,i)=> 
        <ul>
          <li key={x.id}>{x.title}
            <button onClick={(e) => this.del(x.id)}>Delete{i}</button>
          </li>
        </ul>)}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { todos: state.todoState }
}
export default connect(mapStateToProps, {del, loadTodoList})(TodoListComponet)