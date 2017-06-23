import React from 'react';
import Header from '../components/Header';
import werewolfService from '../services/werewolf';

export default ({
  players,
  onPlayersChanged,
  onSelectedDeckChanged,
  selectedDeck,
  decks,
  onCustomizeDeck,
  onGoToPreviousGame,
  onStartChaos,
  onStartGame,
  game,
  setLanguage,
  currentLanguage,
}) => (
  <div>
    <Header name="Home" />
    <div class="col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <div class="row">
            <div class="col-md-4 pull-right">
              <div class="pull-right" >
                {Object.keys(werewolfService.language).map(language => (
                  <button key={language} onClick={() => setLanguage(language)} class={`btn btn-default ${language === currentLanguage ? 'active' : ''}`}>
                    {language.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
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
          <div className="col-md-12">
            <button onClick={onCustomizeDeck} className="btn btn-success btn-block">
              <i class="fa fa-cog" aria-hidden="true" /> Customize
            </button>
            <button
              onClick={onGoToPreviousGame}
              className={`btn btn-info btn-block ${game ? '' : 'hide'}`}
            >
              <i class="fa fa-backward" aria-hidden="true" /> Previous game
            </button>
            <br />
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
