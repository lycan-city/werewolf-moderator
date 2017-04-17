import React from 'react';
import { Link } from 'react-router';
import propTypes from 'prop-types';

import Header from '../components/Header';

class Home extends React.Component {
  constructor() {
    super();
    this.onPlayersChanged = this.onPlayersChanged.bind(this);
    this.onDeckChanged = this.onDeckChanged.bind(this);
    this.startChaos = this.props.startChaos;
    this.startBalanced = this.props.startBalanced;
  }

  onPlayersChanged(event) {
    this.props.setPlayers(parseInt(event.target.value, 10));
  }

  onDeckChanged(event) {
    this.props.setCurrentDeck(event.target.value);
  }

  render() {
    const options = this.props.getDecks().map(e => <option value={e} key={e}>{e}</option>);

    return (
      <div>
        <Header name="Home" />
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <form class="form-horizontal">
                <div class="form-group col-md-12">
                  <label class="control-label" for="players">Players</label>
                  <input
                    name="players" type="number" class="form-control input-md" placeholder="0"
                    min="0" value={this.props.players} onChange={this.onPlayersChanged}
                  />
                </div>
                <div class="form-group col-md-12">
                  <label class="control-label" for="deck">Deck</label>
                  <div class="">
                    <select
                      id="deck" name="deck" class="form-control"
                      onChange={this.onDeckChanged} value={this.props.currentDeck}
                    >
                      {options}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div class="panel-footer">
              <div class="col-md-12">
                <Link to="cards" className="btn btn-success btn-block">
                  Customize<i class="fa fa-cog" aria-hidden="true" /></Link>
              </div>
              <hr />
              <div class="col-md-12">
                <button
                  onClick={this.startChaos} className="btn btn-default col-md-5"
                > <i class="fa fa-arrows" aria-hidden="true" /> Quick Chaos</button>
                <button
                  onClick={this.startBalanced} className="btn btn-default col-md-5 col-md-offset-2"
                > <i class="fa fa-balance-scale" aria-hidden="true" /> Quick Balanced</button>
              </div>
              <div class="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  startBalanced: propTypes.func.isRequired,
  startChaos: propTypes.func.isRequired,
  getDecks: propTypes.func.isRequired,
  setPlayers: propTypes.func.isRequired,
  setCurrentDeck: propTypes.func.isRequired,
  players: propTypes.instanceOf(Number).isRequired,
  currentDeck: propTypes.instanceOf(String).isRequired,
};

export default Home;
