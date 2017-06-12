import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterLevels } from 'werewolf-brain';

import Header from '../components/Header';
import werewolfService from '../services/werewolf';


class Screenplay extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    if (!this.props.game) {
      this.props.goToHome();
    }
  }

  t(key) {
    return this.props.translations[this.props.language].calls[key];
  }

  filterButton(level) {
    const active = (this.props.filterLevel === level) ? 'active' : '';
    return (<button key={level} class={`btn btn-default ${active}`} onClick={() => this.props.setFilterLevel(level)}> {
      Object.keys(filterLevels).find(k => filterLevels[k] === level)
    }
    </button>);
  }

  render() {
    if (!this.props.game) {
      return null;
    }

    const cards = this.props.game.screenplay
      .filter(call => call.level <= this.props.filterLevel)
      .filter(call => !call.firstNight || !this.state.hideFirstNight)
      .map(call => (
        <a
          class={`list-group-item ${(call.level === filterLevels.game) ? '' : 'list-group-item-warning'}`}
          key={call.key}
        >
          {this.t(call.key)}
        </a>
      ));

    return (
      <div>
        <Header name="Screenplay" />
        <div class="col-md-6 col-md-offset-3">
          <div class="panel panel-default ">
            <div class="panel-heading">
              <div class="row">
                <div class="col-md-4" >
                  <div class="btn-group" >
                    {Object.keys(filterLevels).map(level => this.filterButton(filterLevels[level]))}
                  </div>
                </div>
                <div class="col-md-4">
                  <button
                    class={`center-block btn btn-default ${this.state.hideFirstNight ? 'active' : ''}`}
                    onClick={() => this.setState({ hideFirstNight: !this.state.hideFirstNight })}
                  >Hide first night</button>
                </div>
                <div class="col-md-4">
                  <div class="btn-group pull-right" >
                    {Object.keys(werewolfService.language).map(language => (
                      <button key={language} onClick={() => this.props.setLanguage(language)} class={`btn btn-default ${language === this.props.language ? 'active' : ''}`}>
                        {language.toUpperCase()}
                      </button>
                  ))}
                  </div>
                </div>
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

const mapStateToProps = ({ game, defaultData, language, preferences }) => ({
  game,
  translations: defaultData.translations,
  language,
  filterLevel: preferences.filterLevel,
});

export default connect(mapStateToProps)(Screenplay);
