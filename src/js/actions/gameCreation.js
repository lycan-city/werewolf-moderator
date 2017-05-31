import { push } from 'react-router-redux';

import {
  CHANGE_CARD_AMOUNT,
  PRELOAD_DEFAULT_DATA,
  SET_CURRENT_GAME,
  SET_GAME_TYPE,
  SET_SCRIPT_LANGUAGE,
  SET_SELECTED_DECK,
} from './types';
import werewolfService from '../services/werewolf';
import gameTypes from '../core/gameTypes';

export const setPlayers = players => ({
  type: 'SET_PLAYERS',
  players,
});

export const setSelectedDeck = (selectedDeck) => {
  const deck = werewolfService.getCardsInDeck(selectedDeck)
    .map(c => ({
      key: c.key,
      amount: c.value,
    }));

  return {
    type: SET_SELECTED_DECK,
    selectedDeck,
    deck,
  };
};

export const preloadDefaultData = () => (dispatch, getState) => {
  const deckKeys = Object.keys(werewolfService.getDecks());

  if (!getState().gameSetup.selectedDeck) {
    dispatch(setSelectedDeck(deckKeys[0]));
  }

  dispatch({
    type: PRELOAD_DEFAULT_DATA,
    decks: deckKeys,
    cards: werewolfService.getCards(),
  });
};

export const customizeDeck = () => push('cards');

export const setGameType = gameType => ({
  type: SET_GAME_TYPE,
  gameType,
});

export const changeCardAmount = (cardKey, amount) => ({
  type: CHANGE_CARD_AMOUNT,
  card: werewolfService.getCard(cardKey), // TODO: validate non-undefined maybe?
  amount,
});

const startGameWithMode = (mode, dispatch, getState) => {
  const { gameSetup } = getState();
  const currentGame = werewolfService.createGame(
    gameSetup.players,
    mode,
    gameSetup.deck,
    'custom',
  );

  dispatch(setGameType(mode));
  dispatch({
    type: SET_CURRENT_GAME,
    game: currentGame,
  });
};

const startGameWithModeAndRedirect = mode => () => (dispatch, getState) => {
  startGameWithMode(mode, dispatch, getState);
  dispatch(push('/game'));
};

export const startGame = startGameWithModeAndRedirect(gameTypes.balanced);
export const startChaos = startGameWithModeAndRedirect(gameTypes.chaos);

export const rematch = () => (dispatch, getState) => {
  const { gameSetup } = getState();
  return startGameWithMode(gameSetup.type, dispatch, getState);
};

export const translateScript = lang => (dispatch, getState) => () => {
  const { game } = getState();

  const script = werewolfService.getScript(game.deck, lang);

  dispatch({
    type: SET_SCRIPT_LANGUAGE,
    script,
  });
};
