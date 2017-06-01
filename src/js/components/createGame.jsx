import React from 'react';
import Header from '../components/Header';

export default ({
  players,
  onPlayersChanged,
  onSelectedDeckChanged,
  selectedDeck,
  decks,
  onCustomizeDeck,
  onStartChaos,
  onStartGame,
}) => (
  <div>
    <Header name="Home" />
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-body">
          <form class="form-horizontal">
            <div class="form-group col-md-12">
              <label class="control-label" htmlFor="players">Players</label>
              <input
                name="players"
                type="number"
                class="form-control input-md"
                placeholder="0"
                min="0"
                value={players}
                onChange={event => onPlayersChanged(parseInt(event.target.value, 10))}
              />
            </div>
            <div class="form-group col-md-12">
              <label class="control-label" htmlFor="deck">Deck</label>
              <div class="">
                <select
                  id="selectedDeck"
                  name="selectedDeck"
                  class="form-control"
                  onChange={event => onSelectedDeckChanged(event.target.value)}
                  value={selectedDeck}
                >

                  {decks.map(e => <option value={e} key={e}>{e}</option>)}

                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="panel-footer">
          <div class="col-md-12">
            <button onClick={onCustomizeDeck} className="btn btn-success btn-block">
                Customize <i class="fa fa-cog" aria-hidden="true" />
            </button>
          </div>
          <hr />
          <div class="col-md-12">
            <button onClick={onStartChaos} className="btn btn-default col-md-5">
              <i class="fa fa-arrows" aria-hidden="true" /> Quick Chaos
              </button>
            <button onClick={onStartGame} className="btn btn-default col-md-5 col-md-offset-2">
              <i class="fa fa-balance-scale" aria-hidden="true" /> Quick Balanced
              </button>
          </div>
          <div class="clearfix" />
        </div>
      </div>
    </div>
  </div>
  );
