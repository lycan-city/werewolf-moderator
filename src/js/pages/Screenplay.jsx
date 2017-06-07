import React, { Component } from 'react';
import { connect } from 'react-redux';

import withLayout from '../components/withLayout';
import werewolfService from '../services/werewolf';


class Screenplay extends Component {
  componentWillMount() {
    if (!this.props.game) {
      this.props.goToSetup();
    }
  }

  render() {
    if (!this.props.game) {
      return null;
    }

    const cards = this.props.game.script.map(c => (
      <a class="list-group-item" key={c}>
        {c}
      </a>
    ));

    return (
      <div class="list-group">
        {cards}
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({ game });

const connected = connect(mapStateToProps)(Screenplay);

const Heading = ({ translateScript }) => (
  <div >
    <div class="pull-right">
      <button
        onClick={() => translateScript(werewolfService.language.es)}
        class="btn btn-default"
      >ES</button>
      <button
        onClick={() => translateScript(werewolfService.language.en)}
        class="btn btn-default"
      >EN</button>
    </div>
    <div class="clearfix" />
  </div>);

const Footer = ({ goToHome, goBack }) => (
  <div>
    <button onClick={goToHome} className="btn btn-default pull-right col-md-6 col-xs-12" >
      <i class="fa fa-repeat" aria-hidden="true" /> New Game
    </button>
    <button onClick={goBack} class="btn btn-default pull-left col-md-4 col-xs-12" >
      <i class="fa fa-arrow-left" aria-hidden="true" /> Back
    </button>
    <div class="clearfix" />
  </div>
);

export default withLayout(connected, { Footer, Heading }, 'Screenplay');
