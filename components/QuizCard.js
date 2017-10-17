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
    height: 60
  },
  cardText: {
    fontSize: 18
  }
})

function mapStateToProps (state, { title }) {
  return {
    deck: state.decks[title],
    currentCardIndex: state.quiz.currentCardIndex,
    showAnswer: state.quiz.showAnswer,
  }
}

export default connect(mapStateToProps)(QuizCard);
