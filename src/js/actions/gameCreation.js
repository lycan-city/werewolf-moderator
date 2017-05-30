import { push } from 'react-router-redux'

import {
    PRELOAD_DEFAULT_DATA,
    SET_SELECTED_DECK,
    CHANGE_CARD_AMOUNT,
    SET_CURRENT_GAME,
    SET_GAME_TYPE,
    SET_SCRIPT_LANGUAGE,
} from './types';
import werewolfService from '../services/werewolf';

export const setPlayers = (players) => {
    return {
        type: 'SET_PLAYERS',
        players,
    }
}

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
}

export const preloadDefaultData = () => (dispatch, getState) => {
    const deckKeys = Object.keys(werewolfService.getDecks());

    if (!getState().gameSetup.selectedDeck)
        dispatch(setSelectedDeck(deckKeys[0]));

    dispatch({
        type: PRELOAD_DEFAULT_DATA,
        decks: deckKeys,
        cards: werewolfService.getCards(),
    });
};

export const customizeDeck = () => {
    return push('cards');
};

export const changeCardAmount = (cardKey, amount) => ({
    type: CHANGE_CARD_AMOUNT,
    card: werewolfService.getCard(cardKey),
    amount
});

const startGameWithMode = (mode, dispatch, getState) => {
    const { gameSetup } = getState();
    const currentGame = werewolfService.createGame(
        gameSetup.players,
        mode,
        gameSetup.deck,
        'custom'
    );

    dispatch(setGameType(mode));
    dispatch({
        type: SET_CURRENT_GAME,
        game: currentGame,
    });

};

const startGameWithModeAndRedirect = (mode) => () => (dispatch, getState) => {
    startGameWithMode(mode, dispatch, getState);
    dispatch(push('/game'));
}

export const startGame = startGameWithMode(werewolfService.mode.NORMAL);
export const startChaos = startGameWithMode(werewolfService.mode.CHAOS);

export const rematch = () => (dispatch, getState) => {
    const { gameSetup } = getState();
    return startGameWithMode(gameSetup.type, dispatch, getState);
}

export const setGameType = (gameType) => ({
    type: SET_GAME_TYPE,
    gameType,
});

export const translateScript = (lang) => (dispatch, getState) => () => {
    const { game } = getState();

    const script = werewolfService.getScript(game.deck, lang);

    dispatch({
        type: SET_SCRIPT_LANGUAGE,
        script,
    });
}