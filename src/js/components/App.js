import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import '../../css/main.css';
import * as actionCreators from '../actions';

class App extends React.Component {
  
  componentWillMount() {
    this.props.preloadDefaultData();
  }

  render() {
    return(
      <div>{this.props.children}</div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));