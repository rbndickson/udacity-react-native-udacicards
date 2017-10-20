import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class QuizCard extends Component {
  render() {
    const { deck, currentCardIndex, showAnswer } = this.props;
    const { frontText, backText } = deck.cards[currentCardIndex];

    return (
      <View>
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
  textContainer: {
    minHeight: 100
  },
  cardText: {
    fontSize: 22
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
