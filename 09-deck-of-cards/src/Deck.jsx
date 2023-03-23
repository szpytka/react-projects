import React, { Component } from 'react';
import './Deck.css';
import Card from './Card';
import axios from 'axios';
const API_BASE = 'https://deckofcardsapi.com/api/deck';

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawn: [],
      runOut: false,
    };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE}/new/shuffle/`);
    this.setState({
      deck: deck.data,
    });
  }
  async getCard() {
    // make request using deck id

    try {
      let deck = await axios.get(
        `${API_BASE}/${this.state.deck.deck_id}/draw/`
      );
      if (!deck.data.success) {
        throw new Error('No card remaining!');
      }
      let card = deck.data.cards[0];
      this.setState((state) => ({
        drawn: [
          ...state.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert('Run Out Of Cards');
      this.setState({
        runOut: true,
      });
    }
  }
  render() {
    const cards = this.state.drawn.map((card) => (
      <Card key={card.id} name={card.name} image={card.image} />
    ));
    return (
      <div className="Deck">
        <h1 className="Deck-title">◆ Card Dealer ◆</h1>
        <button
          className="Deck-btn"
          onClick={this.getCard}
          disabled={this.state.runOut}
        >
          Get Card!
        </button>
        <div className="Deck-cards">{cards}</div>
      </div>
    );
  }
}
