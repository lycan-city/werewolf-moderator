import { push } from 'react-router-redux'

import {
    PRELOAD_DEFAULT_DATA,
    SET_SELECTED_DECK,
    CHANGE_CARD_AMOUNT,
    SET_CURRENT_GAME,
    SET_GAME_TYPE,
} from './types';
import werewolfService from '../services/werewolf';
import gameTypes from '../core/gameTypes';

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

export const onCardAmountChanged = (cardKey, amount) => ({
    type: CHANGE_CARD_AMOUNT,
    card: werewolfService.getCard(cardKey), //TODO: validate non-undefined maybe?
    amount
});

const startGameWithMode = (mode) => () => (dispath, getState) => {
    const { gameSetup } = getState();
    const currentGame = werewolfService.createGame(
        gameSetup.players,
        mode,
        gameSetup.deck,
        'custom'
    );
    dispath(setGameType(mode));
    dispath({
        type: SET_CURRENT_GAME,
        game: currentGame,
    });
    dispath(push('/game'));
};

export const startGame = startGameWithMode(gameTypes.balanced)
export const startChaos = startGameWithMode(gameTypes.chaos)

export const setGameType = (gameType) => ({
    type: SET_GAME_TYPE,
    gameType,
});