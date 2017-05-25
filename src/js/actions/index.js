import werewolfService from '../services/werewolf';

export const setPlayers = (players) => {
    return {
        type: 'SET_PLAYERS',
        players,
    }
}

export const setCurrentDeck = (currentDeck) => {
    const currentCards = werewolfService.getCardsInDeck(currentDeck)
    .map(c => {
      return {
        key: c.key,
        visible: werewolfService.isInDeck(c.key, currentDeck),
        amount: 1,
      }
    });

    return {
        type: 'SET_CURRENT_DECK',
        currentDeck,
        currentCards,
    }
}
