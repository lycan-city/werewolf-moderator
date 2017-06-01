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
                    checked={amount > 0}
                    name={cardKey} 
                    onChange={(ev) => {
                        const amount = ev.target.checked ? 1 : 0;
                        onCardAmountChanged(cardKey, amount);
                    }}
                    />
                {cardKey}
            </label>
            <input
                class='pull-right card-quantity'
                type={"number"}
                value={amount}
                min={0}
                name={cardKey}
                onChange={(ev) => {
                    const amount = Number.parseInt(ev.target.value, 10);
                    onCardAmountChanged(cardKey, amount);
                }}
                disabled={amount === 0}
                ></input>
        </div>
    );

export default CardCustomizer;