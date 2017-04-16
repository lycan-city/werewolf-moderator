import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => (
  <div class="title">
    <div class="text-center">
      <h1>{name}</h1>
    </div>
    <hr />
  </div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
