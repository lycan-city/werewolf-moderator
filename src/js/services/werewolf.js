import brain from 'werewolf-brain';

export default new class werewolfService {
    getDecks() {
        return brain.getAllDecks();        
    }
    
    getCards() {
        return brain.getAllCards();
    }

    getCardsInDeck(deck) {
        return brain.getInDeck(deck);
    }

    isInDeck(card, deck) {
        return brain.getInDeck(deck).includes(card);
    }
}
