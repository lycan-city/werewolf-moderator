import React from 'react';
import ReactDOM from 'react-dom';
import werewolfBrain from 'werewolf-brain';

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var n = getRandom(1, 50);
var m = getRandom(0, 1);
var x = getRandom(0, 4);
var mode = m ? 'Chaos' : 'Balanced';

var t = {
  0: 'Basic',
  1: 'Novice',
  2: 'Amateur',
  3: 'Wolfpack',
  4: 'Competent'
};

class Main extends React.Component {
  render() {
    let game = {};
    let htmlText = '';
    n = this.props.players || n;

    if (m) game = werewolfBrain.getChaosGameFromTemplate(n, t[x]);
    else game = werewolfBrain.getGameFromTemplate(n, t[x]);

    game.deck = Object.keys(game.deck).map(function (card, index) {
      return game.deck[card] + " " + card;
    });

    for (var i = 0; i < game.deck.length; i++) {
      htmlText += game.deck[i] + " *** \n";
    }

    return (
      <div>
        <h1>Werewolf Moderator</h1>
        <p>Deck: {htmlText}</p>
        <p>Weight: {game.weight}</p>
        <p>Players: {game.players}</p>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main players={getParameterByName('players')}/>, app);