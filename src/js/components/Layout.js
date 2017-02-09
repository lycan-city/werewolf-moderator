import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div class="app">
          {this.props.children}
      </div>
    );
  }
}