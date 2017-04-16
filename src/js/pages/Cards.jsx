import React from 'react';
import { browserHistory } from 'react-router';
import propTypes from 'prop-types';

import Header from '../components/Header';

class Cards extends React.Component {
  constructor() {
    super();
    this.setVisibility = this.setVisibility.bind(this);
    this.changeCardAmount = this.changeCardAmount.bind(this);
    this.startBalanced = this.props.startBalanced;
    this.startChaos = this.props.startChaos;
  }

  setVisibility(ev) {
    const card = ev.target.name;
    const checked = ev.target.checked;
    this.props.setCardVisibility(card, checked);
  }

  changeCardAmount(ev) {
    const card = ev.target.name;
    const amount = ev.target.value;
    this.props.changeAmountValue(card, amount);
  }

  render() {
    const cards = this.props
      .getAllCards()
      .map((c) => {
        const card = c;
        card.amount = 0;
        card.visible = false;
        return this.props.getCardsInGame().find(k => k.key === card.key) || c;
      })
      .map(c => (
        <div class="col-md-6 col-xs-12" key={c.key}>
          <label>
            <input
              type="checkbox"
              onChange={this.setVisibility}
              checked={c.visible}
              name={c.key}
            /> {c.key}</label>

          <input
            class={'pull-right card-quantity'}
            type={'number'}
            value={c.amount}
            min={0}
            name={c.key}
            onChange={this.changeCardAmount}
            disabled={!c.visible}
          />
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
              <button
                onClick={browserHistory.goBack}
                className="btn btn-default col-md-2 col-xs-12 btn-space"
              > <i class="fa fa-arrow-left" aria-hidden="true" />
              </button>
              <button
                onClick={this.startChaos}
                className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"
              ><i class="fa fa-arrows" aria-hidden="true" />Quick Chaos
              </button>
              <button
                onClick={this.startBalanced}
                className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"
              >
                <i class="fa fa-balance-scale" aria-hidden="true" />Quick Balanced
              </button>
              <div class="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cards.propTypes = {
  startBalanced: propTypes.func.isRequired,
  startChaos: propTypes.func.isRequired,
  setCardVisibility: propTypes.func.isRequired,
  changeAmountValue: propTypes.func.isRequired,
  getAllCards: propTypes.func.isRequired,
  getCardsInGame: propTypes.func.isRequired,
};


export default Cards;
