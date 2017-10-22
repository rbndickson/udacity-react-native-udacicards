import React, { Component } from 'react';
import { Animated, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import {
  showAnswer,
  hideAnswer,
  updateCurrentCardIndex,
  updateQuizScore,
  setQuizToComplete
} from '../actions';

import { mainTextColor, headerTextColor } from '../utils/colors';

import Button from './Button';

class QuizButtonsReportAnswer extends Component {
  state = {
    fadeAnimation: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnimation,
      {
        toValue: 1,
        duration: 50,
      }
    ).start();
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
    } else {
      this.props.dispatch(setQuizToComplete())
    }
  }

  render() {
    let { fadeAnimation } = this.state;

    return (
      <Animated.View
        style={{
          flexDirection: 'row',
          opacity: fadeAnimation,
        }}
      >
        <TouchableOpacity
          onPress={this.handleIncorrect}
          style={[styles.button, styles.incorrectButton]}
        >
          <Text style={styles.buttonText}>
            Incorrect
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleCorrect}
          style={[styles.button, styles.correctButton]}
        >
          <Text style={styles.buttonText}>
            Correct
          </Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  correctButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#1affd5'
  },
  incorrectButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#ff6978'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    color: mainTextColor
  }
})

function mapStateToProps (state) {
  return {
    deck: state.decks[state.quiz.title],
    currentCardIndex: state.quiz.currentCardIndex,
    showAnswer: state.quiz.showAnswer,
    score: state.quiz.score
  };
}

export default connect(mapStateToProps)(QuizButtonsReportAnswer);
