import React from 'react';
import { connect } from 'react-redux';
import CreateGame from '../components/createGame';

const Home = () => (<CreateGame
  players={this.props.players}
  onPlayersChanged={this.props.setPlayers}
  onSelectedDeckChanged={this.props.setSelectedDeck}
  selectedDeck={this.props.selectedDeck}
  decks={this.props.decks}
  onCustomizeDeck={this.props.customizeDeck}
  onStartChaos={this.props.startChaos}
  onStartGame={this.props.startGame}
/>);

const mapStateToProps = state => ({
  players: state.gameSetup.players,
  selectedDeck: state.gameSetup.selectedDeck,
  decks: state.defaultData.decks
});

export default connect(mapStateToProps)(Home);
