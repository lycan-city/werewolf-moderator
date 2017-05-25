import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Header from '../components/Header';
import gamesTypes from '../core/gameTypes';
import * as actionCreators from '../actions';

class Home extends React.Component {
  constructor(){
    super();
  }

  onPlayersChanged(event) {
    this.props.setPlayers(parseInt(event.target.value, 10));
  }

  onDeckChanged(event) {
    this.props.setCurrentDeck(event.target.value);
  }

  render() {
    const options = this.props.getDecks().map((e, i) => <option value={e} key={i}>{e}</option> );

    return (
    <div>
      <Header name="Home" />
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <form class="form-horizontal">
              <div class="form-group col-md-12">
                <label class="control-label" for="players">Players</label>
                <input name="players" type="number" class="form-control input-md" placeholder="0" min="0" value={this.props.players} onChange={this.onPlayersChanged} />
              </div>
              <div class="form-group col-md-12">
                <label class="control-label" for="deck">Deck</label>
                <div class="">
                  <select id="deck" name="deck" class="form-control" onChange={this.onDeckChanged} value={this.props.currentDeck}>
                    {options}
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="panel-footer">
            <div class="col-md-12">
              <Link to="cards" className="btn btn-success btn-block">Customize  <i class="fa fa-cog" aria-hidden="true"></i></Link>
            </div>
            <hr />
            <div class="col-md-12">
              <button onClick={this.props.startGame.bind(this, gamesTypes.chaos)} className="btn btn-default col-md-5"><i class="fa fa-arrows" aria-hidden="true"></i> Quick Chaos</button>
              <button onClick={this.props.startGame.bind(this, gamesTypes.balanced)} className="btn btn-default col-md-5 col-md-offset-2"><i class="fa fa-balance-scale" aria-hidden="true"></i> Quick Balanced</button>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
</div>
);
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    currentDeck: state.currentDeck,
  }
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);