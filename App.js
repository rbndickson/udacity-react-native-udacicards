import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import NewDeck from './components/NewDeck';
import DeckList from './components/DeckList';

export default class App extends React.Component {

  render() {
    const store = createStore(reducer);

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DeckList />
          {/* <NewDeck /> */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
