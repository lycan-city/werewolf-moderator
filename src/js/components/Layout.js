import React from 'react';

import '../../css/main.css';

export default class Layout extends React.Component {
  render() {
    return (
      <div class="app">
          {this.props.children}
      </div>
    );
  }
}