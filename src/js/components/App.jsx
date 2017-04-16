import React from 'react';
import propTypes from 'prop-types';

import '../../css/main.css';

const App = ({ children }) => (
  <div>{children}</div>
);

App.propTypes = {
  children: propTypes.node.isRequired,
};

export default App;
