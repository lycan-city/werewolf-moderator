import werewolfService from '../services/werewolf';
import { 
    PRELOAD_DEFAULT_DATA, 
    SET_SELECTED_DECK ,
    CHANGE_CARD_AMOUNT
} from './types';
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
        amount: 1,
      }
    });

    return {
        type: SET_SELECTED_DECK,
        selectedDeck,
        deck,
    };
}

export const preloadDefaultData = () => {
    return {
        type: PRELOAD_DEFAULT_DATA,
        decks: Object.keys(werewolfService.getDecks()),
        cards: werewolfService.getCards(),
    };
}

export const customizeDeck = () => {
    return push('cards');
}

export const onCardAmountChanged = (cardKey, amount) => ({
    type: CHANGE_CARD_AMOUNT,
    card: werewolfService.getCard(cardKey), //TODO: validate non-undefined maybe?
    amount
});