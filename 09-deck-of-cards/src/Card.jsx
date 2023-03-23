import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  //  transform: translate(10px, 20px) rotate(25deg);
  constructor(props) {
    super(props);
    let random1 = Math.random() * 90 - 45;
    let random2 = Math.random() * 40 - 20;
    let random3 = Math.random() * 40 - 20;
    this._transform = `translate(${random2}px, ${random3}px) rotate(${random1}deg)`;
  }
  render() {
    return (
      <img
        style={{ transform: this._transform }}
        className="Card"
        src={this.props.image}
        alt={this.props.name}
      />
    );
  }
}
