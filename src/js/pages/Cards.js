import React from 'react';
import { Link, browserHistory } from 'react-router';

import Header from '../components/Header';

export default class Cards extends React.Component {
  constructor() {
    super();
    this.setVisibility = this.setVisibility.bind(this);
    this.changeCardValue = this.changeCardValue.bind(this);
  }
  
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
      .getAllCards()
      .map(c => {
        return this.props.getCardsInGame().find(k => k.key === c.key) || c;
      })
      .map(c => (
        <div class="col-md-6 col-xs-12" key={c.key}>
            <label><input type="checkbox" onChange={this.setVisibility} checked={c.visible} name={c.key} /> {c.key}</label>
            <input class='pull-right card-quantity' type={"number"} value={c.value} min={0} name={c.key} onChange={this.changeCardValue} disabled={!c.visible} ></input>
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
              <button onClick={this.props.startGame.bind(this, "chaos")} className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"><i class="fa fa-arrows" aria-hidden="true"></i> Quick Chaos</button>
              <button onClick={this.props.startGame.bind(this, "balanced")} className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"><i class="fa fa-balance-scale" aria-hidden="true"></i> Quick Balanced</button>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
