import React from 'react';
import { string } from 'prop-types';

export default class Header extends React.Component {
  static propTypes = {
    name: string.isRequired
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