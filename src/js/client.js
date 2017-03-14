import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import Home from './pages/Home';
import Game from './pages/Game';
import Cards from './pages/Cards';
import Screenplay from './pages/Screenplay';

import App from './components/App';
import Wizard from './components/Wizard';

const app = document.getElementById('app');

render(
<Router history={browserHistory}>
    <Route component={App}>
        <Route component={Wizard}>
            <Route path="/" component={Home} />
            <Route path="cards" component={Cards} props="" />
        </Route>
        <Route path="game" component={Game}/>
        <Route path="screenplay" component={Screenplay} />
    </Route>
</Router>, app);