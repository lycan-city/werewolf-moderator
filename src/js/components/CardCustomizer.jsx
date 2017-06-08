import React from 'react';

const CardCustomizer = ({
  cardKey,
  amount,
  onCardAmountChanged,
}) => (
  <div class="col-md-6 col-xs-12" key={cardKey}>
    <label htmlFor={cardKey}>
      <input
        type="checkbox"
        checked={amount > 0}
        name={cardKey}
        onChange={(ev) => {
          const a = ev.target.checked ? 1 : 0;
          onCardAmountChanged(cardKey, a);
        }}
      />
      {cardKey}
    </label>
    <input
      class="pull-right card-quantity"
      type={'number'}
      value={amount}
      min={0}
      name={cardKey}
      onChange={(ev) => {
        const a = Number.parseInt(ev.target.value, 10);
        onCardAmountChanged(cardKey, a);
      }}
      disabled={amount === 0}
    />
  </div>
  );

export default CardCustomizer;
