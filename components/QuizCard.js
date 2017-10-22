import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { white } from '../utils/colors';

class QuizCard extends Component {
  render() {
    const { deck, currentCardIndex, showAnswer } = this.props;
    const { frontText, backText } = deck.cards[currentCardIndex];

    return (
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>
            {frontText}
          </Text>
        </View>
        <View style={styles.textContainer}>
          {showAnswer && (
            <Text style={styles.cardText}>
              {backText}
            </Text>
          )}
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1
  },
  textContainer: {
    minHeight: 100,
    backgroundColor: white
  },
  cardText: {
    fontSize: 22,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
    alignSelf: 'center'
  }
})

function mapStateToProps (state) {
  return {
    deck: state.decks[state.quiz.title],
    currentCardIndex: state.quiz.currentCardIndex,
    showAnswer: state.quiz.showAnswer,
  }
}

export default connect(mapStateToProps)(QuizCard);
