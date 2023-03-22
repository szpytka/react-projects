import React, { Component } from 'react';
import uuid from '../node_modules/uuid/dist/v4';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: '' });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          name="task"
          id="task"
          type="text"
          placeholder="New Todo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo!</button>
      </form>
    );
  }
}
