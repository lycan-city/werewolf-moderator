import React from 'react';
import { Link, browserHistory } from 'react-router';

import Header from '../components/Header';
import service from '../services/werewolf';

export default class Cards extends React.Component {
  
  setVisibility(ev) {
    const card = ev.target.name;
    const checked = ev.target.checked;
    this.props.setCardVisibility(card, checked);
  }

  changeCardValue(ev) {
    const card = ev.target.name;
    const value = ev.target.value;
    this.props.changeCardValue(card, value);
  }

  render() {
    const cards = this.props
      .getCardsInGame()
      .map(c => (
        <div class="col-md-6 col-xs-12" key={c.key}>
            <label><input type="checkbox" onChange={this.setVisibility.bind(this)} checked={c.visible} name={c.key} /> {c.key}</label>
            <input class='pull-right card-quantity' value={c.value} type={"number"} min={0} name={c.key} onChange={this.changeCardValue.bind(this)} ></input>
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
              <button onClick={browserHistory.goBack} className="btn btn-default col-md-2 col-xs-12 btn-space"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>              
              <Link to={{pathname:"game", query:{type: "balanced"} }} className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"><i class="fa fa-balance-scale" aria-hidden="true"></i> Start Balanced </Link>
              <Link to={{pathname:"game", query:{type: "chaos"} }} className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"><i class="fa fa-arrows" aria-hidden="true"></i> Start Chaos </Link>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
