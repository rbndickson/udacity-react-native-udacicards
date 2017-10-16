import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { white } from '../utils/colors';

import DeckList from './DeckList';

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
