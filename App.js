import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import reducer from './reducers';
import { setLocalNotification } from './utils/notifications';

import { headerTextColor, headerBackgroundColor } from './utils/colors';

import Home from './components/Home';
import NewDeck from './components/NewDeck';
import Deck from './components/Deck';
import NewCard from './components/NewCard';
import Quiz from './components/Quiz';


const store = createStore(reducer);

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

const Stack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    NewDeck: {
      screen: NewDeck
    },
    Deck: {
      screen: Deck
    },
    NewCard: {
      screen: NewCard
    },
    Quiz: {
      screen: Quiz
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: headerBackgroundColor
      },
      headerTitleStyle: {
        color: headerTextColor,
        fontSize: 24
      },
      headerBackTitleStyle: {
        color: headerTextColor,
        fontSize: 20
      },
      headerTintColor: headerTextColor
    }
  }
)
