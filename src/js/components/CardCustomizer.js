import React from 'react';

const CardCustomizer = ({ cardKey, amount }) => (
    <div class="col-md-6 col-xs-12" key={cardKey}>
        <label><input type="checkbox" onChange={null} checked={false} name={cardKey} /> {cardKey}</label>
        <input class='pull-right card-quantity' type={"number"} value={amount} min={0} name={cardKey} onChange={null} disabled={false} ></input>
    </div>
);

export default CardCustomizer;