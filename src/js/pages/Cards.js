import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';
import Header from '../components/Header';
import CardCustomizer from '../components/CardCustomizer';

class Cards extends React.Component {
  constructor() {
    super();
    this.changeCardAmount = this.changeCardAmount.bind(this);
    this.onCardAmountChanged = this.onCardAmountChanged.bind(this);
  }

  changeCardAmount(ev) {
    const card = ev.target.name;
    const amount = ev.target.value;
    this.props.changeAmountValue(card, amount);
  }

  onCardAmountChanged(cardKey, amount) {
    this.props.cardAmountChanged(cardKey, amount);
  }

  render() {
    const cards = this.props
      .cards
      .map(card => {
        const deckCard = this.props.deck.find(c => card.key === c.key) || {};
        return Object.assign({}, card, { amount: deckCard.amount || 0 })
      })
      .map(card =>
        <CardCustomizer
          key={card.key}
          cardKey={card.key}
          amount={card.amount}
          onCardAmountChanged={this.props.onCardAmountChanged} />
      );

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
              <button onClick={this.props.goToHome} className="btn btn-default col-md-2 col-xs-12 btn-space"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
              <button onClick={this.props.startChaos} className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"><i class="fa fa-arrows" aria-hidden="true"></i> Quick Chaos</button>
              <button onClick={this.props.startGame} className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"><i class="fa fa-balance-scale" aria-hidden="true"></i> Quick Balanced</button>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deck: state.gameSetup.deck,
    cards: state.defaultData.cards,
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
