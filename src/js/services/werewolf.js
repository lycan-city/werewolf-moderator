import brain from 'werewolf-brain';

export default class werewolfService {
  static getDecks() {
    return brain.getDecks();
  }

  static getCards() {
    const cards = brain.getCards();
    return Object.keys(cards).map(key => ({ key, value: cards[key] }));
  }

  static getCard(cardKey) {
    return this.getCards().find(c => c.key === cardKey);
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
      options.deck = cardsArray.reduce((deck, card) => ({
        ...deck,
        [card.key]: card.amount,
      }), {});
    } else {
      options.deckName = deckName;
    }

    return brain.getGame(players, options);
  }

  static getTranslations() {
    return brain.translations;
  }

  static getScript(deck, lang = werewolfService.language.en) {
    return brain.getScriptFromDeck(deck, lang);
  }

  static language = brain.getLanguages().reduce((a, v) =>
    Object.assign(a, { [v]: v }),
    {});

  static mode = brain.getModes;
}
