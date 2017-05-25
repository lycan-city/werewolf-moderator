export const setPlayers = (players) => {
    return {
        type: 'SET_PLAYERS',
        players,
    }
}

export const setCurrentDeck = (currentDeck) => {
    return {
        type: 'SET_CURRENT_DECK',
        currentDeck,
    }
}
