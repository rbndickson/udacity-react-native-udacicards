import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Foundation } from '@expo/vector-icons';

import { white, headerTextColor } from '../utils/colors';

import DeckList from './DeckList';

const addDeckButton = (navigation) => {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('NewDeck') }}>
      <Foundation
        name='plus'
        size={30}
        color={headerTextColor}
        style={{marginRight: 10}}
      />
    </TouchableOpacity>
  );
}

class Home extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Decks',
      headerRight: addDeckButton(navigation)
    };
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: white}}>
        <DeckList navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addDeckText: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default Home;
