import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
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
      <a class="list-group-item" key={c.key}>
        {c}
      </a>
    ));

    return (
      <div>
        <Header name="Screenplay" />
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default ">
            <div class="panel-heading">
              <div class="pull-right">
                <button
                  onClick={() => this.props.translateScript(werewolfService.language.es)}
                  class="btn btn-default"
                >ES</button>
                <button
                  onClick={() => this.props.translateScript(werewolfService.language.en)}
                  class="btn btn-default"
                >EN</button>
              </div>
              <div class="clearfix" />
            </div>
            <div class="panel-body">
              <div class="list-group">
                {cards}
              </div>
            </div>
            <div class="panel-footer">
              <button
                onClick={this.props.goToHome}
                className="btn btn-default pull-right col-md-6 col-xs-12"
              >
                <i class="fa fa-repeat" aria-hidden="true" /> New Game</button>
              <button
                onClick={this.props.goBack}
                class="btn btn-default pull-left col-md-4 col-xs-12"
              >
                <i class="fa fa-arrow-left" aria-hidden="true" /> Back</button>
              <div class="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({ game });

export default connect(mapStateToProps)(Screenplay);
