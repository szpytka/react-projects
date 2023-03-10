import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let cls = `Die fas fa-dice-${this.props.face} ${
      this.props.rolling ? 'rolling' : ''
    }`;
    return <i className={cls}></i>;
  }
}

export default Die;
