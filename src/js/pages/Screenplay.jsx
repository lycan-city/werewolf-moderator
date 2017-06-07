import React from 'react';
import { connect } from 'react-redux';

import withPreexecute from '../components/withPreexecute';
import withLayout from '../components/withLayout';
import werewolfService from '../services/werewolf';

const Heading = ({ translateScript }) => (
  <div >
    <div class="pull-right">
      <button onClick={() => translateScript(werewolfService.language.es)} class="btn btn-default" >ES</button>
      <button onClick={() => translateScript(werewolfService.language.en)} class="btn btn-default" >EN</button>
    </div>
    <div class="clearfix" />
  </div>
);

const Screenplay = ({ game }) => (
  <div class="list-group">
    {game.script.map(c => (
      <a class="list-group-item" key={c}>
        {c}
      </a>
    ))}
  </div>
);

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

const preexecuteBound = withPreexecute(Screenplay,
  ({ game }) => !game,
  ({ goToSetup }) => goToSetup());

const mapStateToProps = ({ game }) => ({ game });

const connected = connect(mapStateToProps)(preexecuteBound);

export default withLayout(connected, { Footer, Heading }, 'Screenplay');
