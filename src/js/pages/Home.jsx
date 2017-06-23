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
  setLanguage,
  currentLanguage,
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
  setLanguage={setLanguage}
  currentLanguage={currentLanguage}
/>);

const mapStateToProps = state => ({
  players: state.gameSetup.players,
  selectedDeck: state.gameSetup.selectedDeck,
  decks: state.defaultData.decks,
  game: state.game,
  currentLanguage: state.language,
});

export default connect(mapStateToProps)(Home);
