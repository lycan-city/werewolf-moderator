import React from 'react';
import { Link, browserHistory } from 'react-router';

import Header from '../components/Header';
import service from '../services/werewolf';

export default class Cards extends React.Component {
  render() {
    const cards = service
      .getCards()
      .slice(0, 14) // todo: pagination
      .map(c => (
        <div class="col-md-6 col-xs-12" key={c.role}>
          <div class="col-md-8 col-xs-6">
            <label><input type="checkbox" name={c.role} /> {c.role}</label>
          </div>
        </div>
      ));

    return (
      <div>
        <Header name="Cards" />
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <form class="form-horizontal">
                {cards}
              </form>
            </div>
            
            <div class="panel-footer">
              <Link to={{pathname:"game", query:{type: "balanced"} }} className="btn btn-success pull-right col-md-4 col-xs-12 btn-space"><i class="fa fa-balance-scale" aria-hidden="true"></i> Start Balanced </Link>
              <Link to={{pathname:"game", query:{type: "chaos"} }} className="btn btn-danger pull-right col-md-4 col-xs-12 btn-space"><i class="fa fa-arrows" aria-hidden="true"></i> Start Chaos </Link>
              <button onClick={browserHistory.goBack} className="btn btn-default pull-left col-md-2 col-xs-12 btn-space"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
