import React from 'react';
import { connect } from 'react-redux';
import CreateGame from '../components/createGame';

const Home = ({
  players,
  setPlayers,
  setSelectedDeck,
  selectedDeck,
  decks,
  customizeDeck,
  startChaos,
  startGame,
}) => (<CreateGame
  players={players}
  onPlayersChanged={setPlayers}
  onSelectedDeckChanged={setSelectedDeck}
  selectedDeck={selectedDeck}
  decks={decks}
  onCustomizeDeck={customizeDeck}
  onStartChaos={startChaos}
  onStartGame={startGame}
/>);

const mapStateToProps = state => ({
  players: state.gameSetup.players,
  selectedDeck: state.gameSetup.selectedDeck,
  decks: state.defaultData.decks,
});

export default connect(mapStateToProps)(Home);
