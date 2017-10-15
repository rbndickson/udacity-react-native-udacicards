import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { white, black, blue } from '../utils/colors';

export default class NewDeck extends Component {
  state = {
    text: ''
  }

  submitDeckTitle = () => {
    console.log(this.state.text)
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
          <Text style={styles.submitButtonText}>Add Deck</Text>
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
    paddingTop: 50
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
