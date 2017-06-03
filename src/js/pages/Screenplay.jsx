import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import languages from '../core/languages';

class Screenplay extends Component {
  componentWillMount() {
    if (!this.props.game) {
      this.props.goToSetup();
    }
  }
  t(key) {
    return this.props.translations[this.props.language].calls[key];
  }
  render() {
    if (!this.props.game) {
      return null;
    }

    const cards = this.props.game.screenplay
      .filter(call => call.level === 'game')
      .map(call => (
        <a class="list-group-item" key={call.key}>
          {this.t(call.key)}
        </a>
      ));

    return (
      <div>
        <Header name="Screenplay" />
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default ">
            <div class="panel-heading">
              <div class="pull-left" >
                
              </div>
              <div class="pull-right">
                <button onClick={() => this.props.setLanguage(languages.spanish)} class="btn btn-default" >ES</button>
                <button onClick={() => this.props.setLanguage(languages.english)} class="btn btn-default" >EN</button>
              </div>
              <div class="clearfix" />
            </div>
            <div class="panel-body">
              <div class="list-group">
                {cards}
              </div>
            </div>
            <div class="panel-footer">
              <button onClick={this.props.goToHome} className="btn btn-default pull-right col-md-6 col-xs-12" >
                <i class="fa fa-repeat" aria-hidden="true" /> New Game</button>
              <button onClick={this.props.goBack} class="btn btn-default pull-left col-md-4 col-xs-12" >
                <i class="fa fa-arrow-left" aria-hidden="true" /> Back</button>
              <div class="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game, defaultData, language }) => ({
  game,
  translations: defaultData.translations,
  language,
});

export default connect(mapStateToProps)(Screenplay);
