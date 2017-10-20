import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class QuizRemaining extends Component {
  render() {
    return (
      <View style={styles.remainingContainer}>
        <Text>
          Cards Remaining: {this.props.remaining}
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  remainingContainer: {
    paddingBottom: 20
  }
})

function mapStateToProps (state) {
  const deck = state.decks[state.quiz.title]
  const totalCards = deck.cards.length;

  return {
    remaining: totalCards - state.quiz.currentCardIndex,
  }
}

export default connect(mapStateToProps)(QuizRemaining);
