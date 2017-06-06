import React from 'react';

const CardCustomizer = ({
  cardKey,
  amount,
  onCardAmountChanged,
}) => (
  <div class="col-md-12 col-xs-12" key={cardKey}>
    <i class="fa fa-minus-circle" aria-hidden="true" />
    <span
      class="card-quantity"
      name={cardKey}
      disabled={amount === 0}
    >{cardKey} <span class="badge">{amount}</span>
    </span>
    <i class="fa fa-plus-circle" aria-hidden="true" />
  </div>
  );

export default CardCustomizer;
