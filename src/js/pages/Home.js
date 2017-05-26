import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Header from '../components/Header';
import gamesTypes from '../core/gameTypes';
import * as actionCreators from '../actions';

import CreateGame from '../components/createGame';

class Home extends React.Component {
  constructor() {
    super();
    this.onPlayersChanged = this.onPlayersChanged.bind(this);
    this.onSelectedDeckChanged = this.onSelectedDeckChanged.bind(this);
  }

  onPlayersChanged(event) {
    this.props.setPlayers(parseInt(event.target.value, 10));
  }

  onSelectedDeckChanged(event) {
    this.props.setSelectedDeck(event.target.value);
  }

  render() {
    return <CreateGame
      players={this.props.players}
      onPlayersChanged={this.onPlayersChanged}
      onSelectedDeckChanged={this.onSelectedDeckChanged}
      selectedDeck={this.props.selectedDeck}
      decks={this.props.decks}
      onCustomizeDeck={this.props.customizeDeck}
      onStartChaos={this.props.startChaos}
      onStartGame={this.props.startGame}
    />;
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.gameSetup.players,
    selectedDeck: state.gameSetup.selectedDeck,
    decks: state.decks
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);