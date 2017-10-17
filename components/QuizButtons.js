import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import {
  showAnswer,
  hideAnswer,
  updateCurrentCardIndex,
  updateQuizScore
} from '../actions';

import { white, blue } from '../utils/colors';

class QuizButtons extends Component {
  handleShowAnswer = () => {
    this.props.dispatch(showAnswer())
  }

  handleCorrect = () => {
    this.props.dispatch(updateQuizScore(this.props.score + 1))
    this.updateQuizStatus()
    this.props.dispatch(hideAnswer())
  }

  handleIncorrect = () => {
    this.updateQuizStatus()
    this.props.dispatch(hideAnswer())
  }

  updateQuizStatus = () => {
    const { deck, currentCardIndex } = this.props;

    if (currentCardIndex < deck.cards.length - 1) {
      this.props.dispatch(updateCurrentCardIndex(currentCardIndex + 1))
    }
  }

  render() {
    const { deck, score, currentCardIndex } = this.props;

    return (
      <View>
        {this.props.showAnswer
          ? <View>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleCorrect}
                >
                <Text style={styles.buttonText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleIncorrect}
                >
                <Text style={styles.buttonText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          : <TouchableOpacity
              style={styles.button}
              onPress={this.handleShowAnswer}
              >
              <Text style={styles.buttonText}>Show Answer</Text>
            </TouchableOpacity>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

function mapStateToProps (state, { title }) {
  return {
    deck: state.decks[title],
    currentCardIndex: state.quiz.currentCardIndex,
    showAnswer: state.quiz.showAnswer,
    score: state.quiz.score
  }
}

export default connect(mapStateToProps)(QuizButtons);
