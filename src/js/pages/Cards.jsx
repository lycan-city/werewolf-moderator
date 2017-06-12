import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import CardCustomizer from '../components/CardCustomizer';

class Cards extends React.Component {
  render() {
    const cards = this.props.cards.map((card) => {
      const deckCard = this.props.deck.find(c => card.key === c.key) || {};
      return Object.assign({}, card, { amount: deckCard.amount || 0 });
    })
      .map(card =>
        (<CardCustomizer
          key={card.key}
          cardKey={card.key}
          amount={card.amount}
          onCardAmountChanged={this.props.changeCardAmount}
        />),
      );

    return (
      <div>
        <Header name="Cards" />
        <div class="col-md-6 col-md-offset-3">
          <div class="panel panel-default">
            <div class="panel-body">
              <form class="form-horizontal">
                {cards}
              </form>
            </div>

            <div class="panel-footer">
              <button
                onClick={this.props.goBack}
                className="btn btn-default col-md-2 col-xs-12 btn-space"
              >
                <i class="fa fa-arrow-left" aria-hidden="true" />
              </button>
              <button
                onClick={this.props.startChaos}
                className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"
              >
                <i class="fa fa-arrows" aria-hidden="true" /> Quick Chaos
                </button>
              <button
                onClick={this.props.startGame}
                className="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space"
              >
                <i class="fa fa-balance-scale" aria-hidden="true" /> Quick Balanced
              </button>
              <div class="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deck: state.gameSetup.deck,
  cards: state.defaultData.cards,
});

export default connect(mapStateToProps)(Cards);
