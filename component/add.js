import React from 'react';

import { connect } from 'react-redux'
import { add } from '../actions/todo';

export default class AddComponet extends React.Component {
  state = { text: '' };

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }
  
  add = () => {
    this.props.add(this.state.text);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.add}>ADD</button>
      </div>
    )
  }
}
export default connect(null, { add })(AddComponet)