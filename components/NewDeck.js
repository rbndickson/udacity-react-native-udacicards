import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { black, blue, white } from '../utils/colors';

import { createDeck, getDecks } from '../utils/api';
import { addDeck } from '../actions';

import Button from './Button';

class NewDeck extends Component {
  static navigationOptions = {
    title: 'Add Deck',
  }

  state = {
    text: ''
  }

  submitDeckTitle = () => {
    const deckTitle = this.state.text;
    createDeck(deckTitle)
    this.props.dispatch(addDeck({
      [deckTitle]: {
        title: deckTitle,
        cards: []
      }
    }))
    this.props.navigation.navigate('Deck', {title: deckTitle})
  }

  render() {
    return (
      <View style={styles.form}>
        <Text>
          What would you like to call your deck?
        </Text>
        <TextInput
          style={styles.textInput}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={this.submitDeckTitle}
          text={'Create Deck'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: white
  },
  textInstructions: {
    width: 200
  },
  textInput: {
    width: 200,
    height: 40,
    marginTop: 20,
    borderColor: blue,
    borderWidth: 1,
    color: black
  }
})

export default connect()(NewDeck);
