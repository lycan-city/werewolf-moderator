import React from 'react';

const CardCustomizer = ({
  cardKey,
  cardRole,
  amount,
  onCardAmountChanged,
}) => (
  <div style={{ paddingBottom: '.5em' }}>
    <div class="input-group">
      <div class="input-group-btn">
        <button
          type="button"
          class="btn btn-default"
          style={{ width: '12em' }}
          onClick={() => {
            if (amount > 0) { onCardAmountChanged(cardKey, 0); }
          }}
        > {cardRole} </button>
      </div>
      <input
        class="form-control"
        disabled={amount === 0}
        type={'number'}
        min={0}
        value={amount}
        name={cardKey}
        onChange={(ev) => {
          const a = Number.parseInt(ev.target.value, 10);
          onCardAmountChanged(cardKey, a);
        }}
      />
      <div class="input-group-btn">
        <button
          type="button"
          class="btn btn-default"
          onClick={() => {
            if (amount > 0) { onCardAmountChanged(cardKey, amount - 1); }
          }}
        >
          <span class="glyphicon glyphicon-minus" />
        </button>
        <button
          type="button"
          class="btn btn-default"
          onClick={() => {
            onCardAmountChanged(cardKey, amount + 1);
          }}
        >
          <span class="glyphicon glyphicon-plus" />
        </button>
      </div>
    </div>
  </div>
  );

export default CardCustomizer;
