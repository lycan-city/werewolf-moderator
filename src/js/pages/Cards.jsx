import React from 'react';
import { connect } from 'react-redux';

import withLayout from '../components/withLayout';
import CardCustomizer from '../components/CardCustomizer';

const Cards = ({ cards, deck, changeCardAmount }) => (
  <form class="form-horizontal">
    {
      cards.map((card) => {
        const deckCard = deck.find(c => card.key === c.key) || {};
        return { ...card, amount: (deckCard.amount || 0) };
      })
        .map(card =>
          (<CardCustomizer
            key={card.key}
            cardKey={card.key}
            amount={card.amount}
            onCardAmountChanged={changeCardAmount}
          />),
      )
    }
  </form>
);

const mapStateToProps = state => ({
  deck: state.gameSetup.deck,
  cards: state.defaultData.cards,
});

const connected = connect(mapStateToProps)(Cards);

const Footer = ({ goBack, startGame, startChaos }) => (
  <div>
    <button onClick={goBack} class="btn btn-default col-md-2 col-xs-12 btn-space" >
      <i class="fa fa-arrow-left" aria-hidden="true" />
    </button>
    <button onClick={startChaos} class="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space" >
      <i class="fa fa-arrows" aria-hidden="true" /> Quick Chaos
    </button>
    <button onClick={startGame} class="btn btn-default col-md-4 col-md-offset-1 col-xs-12 btn-space" >
      <i class="fa fa-balance-scale" aria-hidden="true" /> Quick Balanced
    </button>
    <div class="clearfix" />
  </div>
);

export default withLayout(connected, { Footer }, 'Cards');
