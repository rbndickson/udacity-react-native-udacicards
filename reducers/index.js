import { ADD_DECKS, ADD_DECK } from '../actions';

const initialState = {
  React: {
    title: 'React'
  }
}

function decks (state = initialState, action) {
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
    default:
      return state;
  }
}

export default decks
