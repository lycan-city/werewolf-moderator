import React from 'react';

import '../../css/main.css';

export default class App extends React.Component {

  render() {
    return(
      <div>{this.props.children}</div>
    );
  }
}