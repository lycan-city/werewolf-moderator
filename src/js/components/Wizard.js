import React, {cloneElement} from 'react';
import werewolfService from '../services/werewolf';


export default class Wizard extends React.Component {
  constructor(){
    super();
    this.state = {
      players: 0,
      currentDeck: 'basic', //todo: proper initialization
      currentCards: [],
    };
  }

  setPlayers(players) {
    this.setState(Object.assign({}, this.state, {players}));
  }

  setCurrentDeck(currentDeck) {
    const currentCards = werewolfService.getCards()
    .map(c => {
      return {
        key: c.key,
        visible: werewolfService.isInDeck(c.key, currentDeck),
      }
    });

    this.setState(Object.assign({}, this.state, {currentDeck}, {currentCards}));
  }

  setCardVisibility(cardKey, visible) {
    const currentCards = this.state.currentCards;
    const cardIndex = currentCards.findIndex(c => c.key === cardKey);

    currentCards[cardIndex].visible = visible;

    this.setState(Object.assign({}, this.state, {currentCards}));
  }

  getDecks() {
    return Object.keys(werewolfService.getDecks());
  }

  getCardsInGame() {
    return this.state.currentCards;
  }

  render() {
    return(
      <div>
        {
          this.props.children && 
          cloneElement(this.props.children, { 
            setPlayers: this.setPlayers.bind(this),
            setCurrentDeck: this.setCurrentDeck.bind(this),
            setCardVisibility: this.setCardVisibility.bind(this),
            getDecks: this.getDecks.bind(this),
            getCardsInGame: this.getCardsInGame.bind(this),
            state: this.state,
            })
        }
      </div>
    );
  }
}