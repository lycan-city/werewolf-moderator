import React, { cloneElement } from 'react';
import { browserHistory } from 'react-router';
import propTypes from 'prop-types';

import werewolfService from '../services/werewolf';

const DEFAULT_GAME_MODE = 'balanced';

class Wizard extends React.Component {
  constructor() {
    super();
    this.state = {
      players: 5,
      currentDeck: 'basic', // todo: proper initialization with deck ' * '
      currentCards: werewolfService.getCardsInDeck('basic'), // same as ^
      mode: DEFAULT_GAME_MODE,
      game: {},
    };

    this.werewolfService = werewolfService;
    this.setPlayers = this.setPlayers.bind(this);
    this.setCurrentDeck = this.setCurrentDeck.bind(this);
    this.setCardVisibility = this.setCardVisibility.bind(this);
    this.getAllCards = this.werewolfService.getCards.bind(this);
    this.getCardsInGame = this.getCardsInGame.bind(this);
    this.changeAmountValue = this.changeAmountValue.bind(this);
    this.startBalanced = this.startGame.bind(this, 'balanced');
    this.startChaos = this.startGame.bind(this, 'chaos');
  }

  componentWillMount() {
    this.setCurrentDeck(this.state.currentDeck);
  }

  getDecks() {
    return Object.keys(this.werewolfService.getDecks());
  }

  setPlayers(players) {
    this.setState(Object.assign({}, this.state, {
      players,
    }));
  }

  setCurrentDeck(currentDeck) {
    const currentCards = this.werewolfService.getCardsInDeck(currentDeck)
      .map(c => ({
        key: c.key,
        visible: this.werewolfService.isInDeck(c.key, currentDeck),
        amount: 1,
      }));

    this.setState(Object.assign({}, this.state, { currentDeck }, { currentCards }));
  }

  setCardVisibility(cardKey, visible) {
    const currentCards = this.state.currentCards;

    if (visible) {
      const card = this.werewolfService.getCards().find(c => c.key === cardKey);
      card.visible = true;
      card.amount = 1;
      currentCards.push(card);
    } else {
      const cardIndex = currentCards.findIndex(c => c.key === cardKey);
      currentCards.splice(cardIndex, 1);
    }

    this.setState(Object.assign({}, this.state, { currentCards }, { currentDeck: 'custom' }));
  }

  getCardsInGame() {
    return this.state.currentCards;
  }

  changeAmountValue(cardKey, value) {
    const currentCards = this.state.currentCards;
    const cardIndex = currentCards.findIndex(c => c.key === cardKey);

    currentCards[cardIndex].amount = value;

    this.setState(Object.assign({}, this.state, { currentCards }, { currentDeck: 'custom' }));
  }

  startGame(mode = DEFAULT_GAME_MODE) {
    const { players, currentCards, currentDeck } = this.state;
    const game = this.werewolfService.createGame(players, mode, currentCards, currentDeck);

    this.setState(Object.assign({}, this.state, { mode, game }), () => {
      localStorage.setItem('currentState', JSON.stringify(this.state));
      browserHistory.push('/game');
    });
  }

  render() {
    return (
      <div>
        {
          this.props.children &&
          cloneElement(this.props.children, {
            setPlayers: this.setPlayers,
            setCurrentDeck: this.setCurrentDeck,
            setCardVisibility: this.setCardVisibility,
            getDecks: this.getDecks,
            getAllCards: this.werewolfService.getCards,
            getCardsInGame: this.getCardsInGame,
            changeAmountValue: this.changeAmountValue,
            startBalanced: this.startBalanced,
            startChaos: this.startChaos,
            players: this.state.players,
            currentDeck: this.state.currentDeck,
          })
        } </div>
    );
  }
}

Wizard.propTypes = {
  children: propTypes.node.isRequired,
};

export default Wizard;
