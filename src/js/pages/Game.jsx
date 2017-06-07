import React, { Component } from 'react';
import { connect } from 'react-redux';

import withLayout from '../components/withLayout';
import Card from '../components/Card';

class Game extends Component {
  componentWillMount() {
    if (!this.props.game) {
      this.props.goToSetup();
    }
  }

  render() {
    if (!this.props.game) {
      return null;
    }

    return (
      <div>
        {this.props.game.deck.map(c => <Card key={c.role} {...c} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
});

const connected = connect(mapStateToProps)(Game);

const Footer = ({ goToSetup, rematch, goToScreenplay }) => (
  <div >
    <button onClick={goToSetup} className="btn btn-default col-md-2 col-xs-12"><i class="fa fa-arrow-left" aria-hidden="true" /></button>
    <button onClick={rematch} className="btn btn-primary col-md-4 col-xs-12 col-md-offset-1"><i class="fa fa-refresh" aria-hidden="true" /> Rematch</button>
    <button onClick={goToScreenplay} className="btn btn-success col-md-4 col-xs-12 col-md-offset-1"><i class="fa fa-book" aria-hidden="true" /> Screenplay</button>
    <div class="clearfix" />
  </div>
);

export default withLayout(connected, { Footer }, 'Game');
