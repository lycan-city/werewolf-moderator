import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Header from '../components/Header';
import gamesTypes from '../core/gameTypes';

import CreateGame from '../components/createGame';

class Home extends React.Component {
  render() {
    return <CreateGame
      players={this.props.players}
      onPlayersChanged={this.props.setPlayers}
      onSelectedDeckChanged={this.props.setSelectedDeck}
      selectedDeck={this.props.selectedDeck}
      decks={this.props.decks}
      onCustomizeDeck={this.props.customizeDeck}
      onStartChaos={this.props.startChaos}
      onStartGame={this.props.startGame}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.gameSetup.players,
    selectedDeck: state.gameSetup.selectedDeck,
    decks: state.defaultData.decks
  }
}

export default connect(mapStateToProps)(Home);
