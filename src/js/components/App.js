import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter } from 'react-router'

import actionCreators from '../actions';
import '../../css/main.css';

import Home from '../pages/Home';
import Game from '../pages/Game';
import Cards from '../pages/Cards';
import Screenplay from '../pages/Screenplay';

class App extends Component {

  componentWillMount() {
    this.props.preloadDefaultData();
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={(r => <Home {...r} {...this.props} />)} />
        <Route path="/cards" render={(r => <Cards {...r} {...this.props} />)} />
        <Route path="/game" render={(r => <Game {...r} {...this.props} />)} />
        <Route path="/screenplay" render={(r => <Screenplay {...r} {...this.props} />)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));