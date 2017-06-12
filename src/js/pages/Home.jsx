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
  goToGame,
  startChaos,
  startGame,
  game,
}) => (<CreateGame
  players={players}
  onPlayersChanged={setPlayers}
  onSelectedDeckChanged={setSelectedDeck}
  selectedDeck={selectedDeck}
  decks={decks}
  onCustomizeDeck={customizeDeck}
  onGoToPreviousGame={goToGame}
  onStartChaos={startChaos}
  onStartGame={startGame}
  game={game}
/>);

const mapStateToProps = state => ({
  players: state.gameSetup.players,
  selectedDeck: state.gameSetup.selectedDeck,
  decks: state.defaultData.decks,
  game: state.game,
});

export default connect(mapStateToProps)(Home);
