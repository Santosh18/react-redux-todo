import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Add from './component/add';
import List from './component/list';
import { Provider } from 'react-redux';
import { makeStore } from './store/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <h1>Todo Application</h1>
      <Add />
      <List />
      </div>
    );
  }
}

render(<Provider store={makeStore()}>
<App />
</Provider>, document.getElementById('root'));
