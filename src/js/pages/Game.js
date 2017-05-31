import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Card from '../components/Card';

class Game extends Component {
  componentWillMount() {
    if (!this.props.game) { this.props.goToSetup(); }
  }

  render() {
    if (!this.props.game) { return null; }

    return (
      <div>
        <Header name="Game" />
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default ">
            <div class="panel-body">
              {this.props.game.deck.map(c => <Card key={c.role} {...c} />)}
            </div>
            <div class="panel-footer">
              <button
                onClick={this.props.goBack}
                className="btn btn-default col-md-2 col-xs-12"
              >
                <i class="fa fa-arrow-left" aria-hidden="true" />
              </button>
              <button
                onClick={this.props.rematch}
                className="btn btn-primary col-md-4 col-xs-12 col-md-offset-1"
              >
                <i class="fa fa-refresh" aria-hidden="true" /> Rematch</button>
              <button
                onClick={this.props.goToScreenplay}
                className="btn btn-success col-md-4 col-xs-12 col-md-offset-1"
              >
                <i class="fa fa-book" aria-hidden="true" /> Screenplay</button>
              <div class="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(Game);
