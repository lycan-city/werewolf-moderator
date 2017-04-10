import brain from 'werewolf-brain';

export default new class werewolfService {
    getDecks() {
        return brain.getDecks();        
    }
    
    getCards() {
        const cards = brain.getCards();
        return Object.keys(cards).map(key => {return {key, value: cards[key]}});
    }

    getCardsInDeck(deck) {
        const cards = brain.getDeck(deck);
        return Object.keys(cards).map(key => { return {key, value: cards[key]}})
    }

    isInDeck(card, deck) {
        return !!brain.getDeck(deck)[card];
    }

    createGame(players, mode, cardsArray) {
        const deck = cardsArray.reduce((t, i) => { t[i.key] = i.value; return t; }, {});
        return brain.getGame(players, { mode, deck });
    }

    getScript(deck, lang='en') { //TODO: better defaults
        return brain.getScriptFromDeck(deck, lang);
    }
}
