import React from 'react';
import { Link, browserHistory } from 'react-router';
import service from '../services/werewolf';
import Header from '../components/Header';
import languages from '../core/languages';

export default class Screenplay extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: [],
      script: [],
      lang: 'en', //TODO: Better defaults
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentWillMount() {
    const { currentCards } = JSON.parse(localStorage.getItem('currentState'));
    const script = service.getScript(currentCards, this.state.lang);
    this.setState(Object.assign({}, this.state, { script, deck: currentCards }));
  }

  changeLanguage(event) {
    const lang = event.target.name;
    const script = service.getScript(this.state.deck, lang);
    this.setState(Object.assign({}, { lang, script }));
  }

  render() {
    const cards = this.state.script.map((c, i) => (
      <a href="#" class="list-group-item" key={i}>
        <h4 class="list-group-item-heading"></h4>
        <p class="list-group-item-text">{c}</p>
      </a>
    ));

    return (
      <div>
        <Header name="Screenplay" />
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default ">
            <div class="panel-heading">
              <div class="pull-right">
                <button onClick={this.changeLanguage} name={languages.spanish} type="button" class="btn btn-default">ES</button>
                <button onClick={this.changeLanguage} name={languages.english} type="button" class="btn btn-default">EN</button>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="panel-body">
              <div class="list-group">
                {cards}
              </div>
            </div>
            <div class="panel-footer">
              <Link to="/" className="btn btn-default pull-right col-md-6 col-xs-12"><i class="fa fa-repeat" aria-hidden="true"></i> New Game</Link>
              <button onClick={browserHistory.goBack} class="btn btn-default pull-left col-md-4 col-xs-12"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}