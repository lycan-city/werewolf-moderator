import werewolfService from '../services/werewolf';
import { SET_AVAILABLE_DECKS, SET_SELECTED_DECK } from './types';
import { push } from 'react-router-redux'

export const setPlayers = (players) => {
    return {
        type: 'SET_PLAYERS',
        players,
    }
}

export const setSelectedDeck = (selectedDeck) => {
    const deck = werewolfService.getCardsInDeck(selectedDeck)
    .map(c => {
      return {
        key: c.key,
        visible: werewolfService.isInDeck(c.key, selectedDeck),
        amount: 1,
      }
    });

    return {
        type: SET_SELECTED_DECK,
        selectedDeck,
        deck,
    };
}

export const getAvailableDecks = () => {
    return {
        type: SET_AVAILABLE_DECKS,
        decks: Object.keys(werewolfService.getDecks()),
    };
}
