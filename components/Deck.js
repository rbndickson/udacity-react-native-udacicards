import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { setQuizDeckTitle } from '../actions';

import { white, blue, black } from '../utils/colors';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.bodyText}>
          {`This deck has ${deck.cards.length} Cards`}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={ () => {
            navigation.navigate('NewCard', {title: deck.title})
          }}
          >
          <Text
            style={styles.buttonText}
          >
            Add New Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={ () => {
            this.props.dispatch(setQuizDeckTitle(deck.title))
            navigation.navigate('Quiz', {title: deck.title})
          }}
          >
          <Text style={styles.buttonText}>Take Quiz</Text>
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
  bodyText: {
    fontSize: 18,
    marginBottom: 20
  },
  button: {
    height: 45,
    width: 200,
    backgroundColor: white,
    padding: 10,
    marginTop: 20,
    borderRadius: 7,
    borderColor: blue,
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
    deck: state.decks[title]
  }
}

export default connect(mapStateToProps)(Deck);
