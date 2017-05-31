import React from 'react';
import { string } from 'prop-types';

const Header = ({ name }) => (
  <div class="title">
    <div class="text-center">
      <h1>{name}</h1>
    </div>
    <hr />
  </div>
);

Header.propTypes = {
  name: string.isRequired,
};

export default Header;
