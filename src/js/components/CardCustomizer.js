import React from 'react';

const CardCustomizer = ({
    cardKey,
    amount,
    onCardAmountChanged
}) => (
        <div class="col-md-6 col-xs-12" key={cardKey}>
            <label>
                <input
                    type="checkbox"
                    onChange={onCardCheckedChanged}
                    checked={amount > 0}
                    name={cardKey} />
                {cardKey}
            </label>
            <input
                class='pull-right card-quantity'
                type={"number"}
                value={amount}
                min={0}
                name={cardKey}
                onChange={(ev) => {
                    const cardKey = ev.target.name;
                    const amount = ev.target.value;
                    onCardAmountChanged(cardKey, amount);
                }}
                disabled={amount > 0} ></input>
        </div>
    );

export default CardCustomizer;