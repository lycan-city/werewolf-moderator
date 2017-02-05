import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import Home from './pages/Home';
import Game from './pages/Game';
import Cards from './pages/Cards';
import Screenplay from './pages/Screenplay';


const app = document.getElementById('app');
ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="game" component={Game}/>
      <Route path="cards" component={Cards} />
      <Route path="screenplay" component={Screenplay} />
    </Route>
  </Router>, app);