import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'UdaciCards:Decks'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
}

export function createDeck (title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title
    }
  }));
}
