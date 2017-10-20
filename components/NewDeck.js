import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { white, black, blue } from '../utils/colors';

import { createDeck, getDecks } from '../utils/api';
import { addDeck } from '../actions';

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
        <TouchableOpacity style={styles.submitButton} onPress={()=>{this.submitDeckTitle()}}>
          <Text style={styles.submitButtonText}>Create Deck</Text>
        </TouchableOpacity>
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
  },
  submitButton: {
    height: 45,
    width: 200,
    backgroundColor: white,
    padding: 10,
    marginTop: 20,
    borderRadius: 7,
    borderColor: blue,
    borderWidth: 2,
  },
  submitButtonText: {
    color: blue,
    fontSize: 18,
    textAlign: 'center'
  }
})

export default connect()(NewDeck);
