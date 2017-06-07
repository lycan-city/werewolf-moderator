import React from 'react';
import { connect } from 'react-redux';
import withLayout from '../components/withLayout';

const Home = ({
  players,
  setPlayers,
  setSelectedDeck,
  selectedDeck,
  decks,
}) => (
  <form class="form-horizontal">
    <div class="form-group col-md-12">
      <label class="control-label" htmlFor="players">Players</label>
      <input
        name="players"
        type="number"
        class="form-control input-md"
        placeholder="0"
        min="0"
        value={players}
        onChange={event => setPlayers(parseInt(event.target.value, 10))}
      />
    </div>
    <div class="form-group col-md-12">
      <label class="control-label" htmlFor="deck">Deck</label>
      <div class="">
        <select
          id="selectedDeck"
          name="selectedDeck"
          class="form-control"
          onChange={event => setSelectedDeck(event.target.value)}
          value={selectedDeck}
        >
          {decks.map(e => <option value={e} key={e}>{e}</option>)}
        </select>
      </div>
    </div>
  </form>
  );

const mapStateToProps = state => ({
  players: state.gameSetup.players,
  selectedDeck: state.gameSetup.selectedDeck,
  decks: state.defaultData.decks,
});

const connectedHome = connect(mapStateToProps)(Home);

const Footer = ({
  customizeDeck,
  startChaos,
  startGame,
}) => (
  <div>
    <div class="col-md-12">
      <button onClick={customizeDeck} className="btn btn-success btn-block">
          Customize <i class="fa fa-cog" aria-hidden="true" />
      </button>
    </div>
    <hr />
    <div class="col-md-12">
      <button onClick={startChaos} className="btn btn-default col-md-5">
        <i class="fa fa-arrows" aria-hidden="true" /> Quick Chaos
              </button>
      <button onClick={startGame} className="btn btn-default col-md-5 col-md-offset-2">
        <i class="fa fa-balance-scale" aria-hidden="true" /> Quick Balanced
              </button>
    </div>
    <div class="clearfix" />
  </div>
  );


export default withLayout(connectedHome, { Footer }, 'Home');
