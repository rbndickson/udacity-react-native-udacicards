import { ADD_DECKS, ADD_DECK } from '../actions';

const initialState = {
  React: {
    title: 'React',
    cards: [
      {
        front: 'What is React?',
        back: 'A JavaScript library for building user interfaces'
      },
      {
        front: 'When was React released?',
        back: 'March 2013'
      }
    ]
  },
  Redux: {
    title: 'Redux',
    cards: [
      {
        front: 'What is redux?',
        back: 'A predictable state container for JavaScript apps'
      }
    ]
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
