import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import reducer from './reducers';

import NewDeck from './components/NewDeck';
import Home from './components/Home';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={{height: Constants.statusBarHeight }}>
            <StatusBar translucent />
          </View>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const Stack = StackNavigator({
  Home: {
    screen: Home
  },
  NewDeck: {
    screen: NewDeck
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
