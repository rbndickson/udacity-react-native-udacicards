export const ADD_DECKS = 'ADD_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const SET_QUIZ_DECK_TITLE = 'SET_QUIZ_DECK_TITLE';
export const SHOW_ANSWER = 'SHOW_ANSWER';
export const HIDE_ANSWER = 'HIDE_ANSWER';
export const UPDATE_QUIZ_SCORE = 'UPDATE_QUIZ_SCORE';
export const UPDATE_CURRENT_CARD_INDEX = 'UPDATE_CURRENT_CARD_INDEX';

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

export function setQuizDeckTitle (title) {
  return {
    type: SET_QUIZ_DECK_TITLE,
    title
  }
}

export function showAnswer () {
  return {
    type: SHOW_ANSWER
  }
}

export function hideAnswer () {
  return {
    type: HIDE_ANSWER
  }
}

export function updateCurrentCardIndex (cardIndex) {
  return {
    type: UPDATE_CURRENT_CARD_INDEX,
    cardIndex
  }
}

export function updateQuizScore (score) {
  return {
    type: UPDATE_QUIZ_SCORE,
    score
  }
}
