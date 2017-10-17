export const ADD_DECKS = 'ADD_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const SHOW_ANSWER = 'SHOW_ANSWER';

export function addDecks (decks) {
  return {
    type: ADD_DECKS,
    decks
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCard (deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card
  }
}

export function showAnswer () {
  return {
    type: SHOW_ANSWER
  }
}
