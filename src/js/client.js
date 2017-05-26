import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Home from './pages/Home';
import Game from './pages/Game';
import Cards from './pages/Cards';
import Screenplay from './pages/Screenplay';

import App from './components/App';
import Wizard from './components/Wizard';

import configureStore from './configureStore';

const history = createHistory();
const store = configureStore({ history });

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Route path="/" component={Home} />
                <Route path="cards" component={Cards} />
                <Route path="game" component={Game}/>
                <Route path="screenplay" component={Screenplay} />
            </App>
        </ConnectedRouter>
    </Provider>, document.getElementById('app'));