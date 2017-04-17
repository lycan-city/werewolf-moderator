import brain from 'werewolf-brain';

export default class werewolfService {

  static getDecks() {
    return brain.getDecks();
  }

  static getCards() {
    const cards = brain.getCards();
    return Object.keys(cards).map(key => ({ key, value: cards[key] }));
  }

  static getCardsInDeck(deck) {
    const cards = brain.getDeck(deck);
    return Object.keys(cards).map(key => ({ key, value: cards[key] }));
  }

  static isInDeck(card, deck) {
    return !!brain.getDeck(deck)[card];
  }

  static createGame(players, mode, cardsArray, deckName) {
    const options = {};
    options.mode = mode;

    if (deckName === 'custom') {
      options.deck = cardsArray.reduce((t, i) => {
        t[i.key] = i.amount;
        return t;
      }, {});
    } else {
      options.deckName = deckName;
    }

    return brain.getGame(players, options);
  }

  static getScript(deck, lang = 'en') { // TODO: better defaults
    return brain.getScriptFromDeck(deck, lang);
  }
}
