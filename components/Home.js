import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { white, black, blue } from '../utils/colors';

import DeckList from './DeckList';
import NewDeck from './NewDeck';

const Home = ({ navigation }) => (
  <View style={{flex:1, backgroundColor: white}}>
    <TouchableOpacity onPress={()=>{navigation.navigate('NewDeck')}}>
      <Text style={styles.addDeckText}>Add Deck</Text>
    </TouchableOpacity>
    <DeckList />
  </View>
)

const styles = StyleSheet.create({
  addDeckText: {
    fontSize: 20,
    textAlign: 'center'
  }
})

export default Home
