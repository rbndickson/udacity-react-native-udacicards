import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { white } from '../utils/colors';

import DeckList from './DeckList';

const addDeckButton = (navigation) => {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('NewDeck') }}>
      <Text style={styles.addDeckText}>Add Deck</Text>
    </TouchableOpacity>
  );
}

class Home extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
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
