import React, { Component } from 'react';
import uuid from '../node_modules/uuid/dist/v4';

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      color: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.createBox(newBox);
    this.setState({
      height: '',
      width: '',
      color: '',
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="height">Height </label>
        <input
          type="text"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
          id="height"
        />
        <br />
        <label htmlFor="width">Width </label>
        <input
          type="text"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
          id="width"
        />
        <br />
        <label htmlFor="color">Color </label>
        <input
          type="text"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
          id="color"
        />
        <button>Add New Box!</button>
      </form>
    );
  }
}
