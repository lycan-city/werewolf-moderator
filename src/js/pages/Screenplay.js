import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class Screenplay extends React.Component {
  render() {
    return (
      <div>
        <div class="text-center">
          <h1>Screenplay</h1>
        </div>
        <hr />

        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default ">
            <div class="panel-heading">
              <div class="pull-right">
                <button id="espanishBtn" type="button" class="btn btn-default">ES</button>
                <button id="englishBtn" type="button" class="btn btn-default">EN</button>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="panel-body">
              <div class="list-group">
                <a href="#" class="list-group-item">
                  <h4 class="list-group-item-heading">Hunter</h4>
                  <p class="list-group-item-text">Open your eyes</p>
                </a>
                <a href="#" class="list-group-item">
                  <h4 class="list-group-item-heading">Cupid</h4>
                  <p class="list-group-item-text">Wake up Cupid and choose the lovebirds</p>
                </a>
                <a href="#" class="list-group-item">
                  <h4 class="list-group-item-heading">Werewolf</h4>
                  <p class="list-group-item-text">Open your ayes and look for other wewwolf.</p>
                </a>
              </div>
            </div>
            <div class="panel-footer">
              <Link to="/" className="btn btn-default pull-right col-md-6 col-xs-12"><i class="fa fa-repeat" aria-hidden="true"></i> New Game</Link>
              <button onClick={browserHistory.goBack} class="btn btn-default pull-left col-md-4 col-xs-12"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}