import React from 'react';

export default class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <div class="title">
        <div class="text-center">
          <h1>{this.props.name}</h1>
        </div>
        <hr />
      </div>
    );
  }
}