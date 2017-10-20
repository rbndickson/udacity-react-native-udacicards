import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { setQuizDeckTitle } from '../actions';

import { white } from '../utils/colors';

import Button from './Button';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  handleNewDeck = () => {
    const { navigation, deck } = this.props;
    navigation.navigate('NewCard', {title: deck.title})
  }

  handleQuizStart = () => {
    const { navigation, deck } = this.props;

    if (this.deckHasCards()) {
      this.props.dispatch(setQuizDeckTitle(deck.title))
      navigation.navigate('Quiz', {title: deck.title})
    } else {
      navigation.navigate('NewCard', {title: deck.title})
    }
  }

  deckHasCards = () => {
    return this.props.deck.cards.length > 0
  }

  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.bodyText}>
          {`This deck has ${deck.cards.length} Cards`}
        </Text>
        <Button
          onPress={this.handleNewDeck}
          text={'Create New Question'}
        />
        <Button
          onPress={this.handleQuizStart}
          text={'Start a Quiz'}
        />
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
  }
})

function mapStateToProps (state, { navigation }) {
  const title = navigation.state.params.title;

  return {
    deck: state.decks[title]
  }
}

export default connect(mapStateToProps)(Deck);
