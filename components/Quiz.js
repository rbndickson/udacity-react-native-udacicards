import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { white, blue, black } from '../utils/colors';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={styles.container}>
        <Text>{this.props.deck.cards[this.props.currentCardIndex].frontText}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Flip Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
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
  button: {
    height: 45,
    width: 200,
    backgroundColor: white,
    padding: 10,
    marginTop: 20,
    borderRadius: 7,
    borderWidth: 2,
  },
  buttonText: {
    color: blue,
    fontSize: 18,
    textAlign: 'center'
  }
})

function mapStateToProps (state, { navigation }) {
  const title = navigation.state.params.title;

  return {
    deck: state.decks[title],
    currentCardIndex: state.quiz.currentCardIndex
  }
}

export default connect(mapStateToProps)(Quiz);
