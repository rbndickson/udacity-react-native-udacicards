import { combineReducers } from 'redux';
import { ADD_DECKS, ADD_DECK, ADD_CARD } from '../actions';

function decks (state = {}, action) {
  switch (action.type) {
    case ADD_DECKS :
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      };
    case ADD_CARD :
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          cards: [...state[action.deckTitle].cards, action.card]
        }
      };
    default:
      return state;
  }
}

initialQuizState = {
  currentCardIndex: 0
}

function quiz (state = initialQuizState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  decks,
  quiz,
})
