import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
  showAnswer,
  hideAnswer,
  updateCurrentCardIndex,
  updateQuizScore,
  setQuizToComplete
} from '../actions';

import { mainTextColor } from '../utils/colors';

import Button from './Button';

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
    } else {
      this.props.dispatch(setQuizToComplete())
    }
  }

  render() {
    return (
      <View>
        {this.props.showAnswer
          ? <View>
              <Button
                onPress={this.handleCorrect}
                text={'Correct'}
                customButtonStyles={{
                  backgroundColor: '#1affd5',
                  borderWidth: 4
                }}
                customTextStyles={{
                  color: mainTextColor
                }}
              />
              <Button
                onPress={this.handleIncorrect}
                text={'Incorrect'}
                customButtonStyles={{
                  backgroundColor: '#FF6978',
                  borderWidth: 4
                }}
                customTextStyles={{
                  color: mainTextColor
                }}
              />
            </View>
          : <Button
              onPress={this.handleShowAnswer}
              text={'Show Answer'}
            />
        }
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    deck: state.decks[state.quiz.title],
    currentCardIndex: state.quiz.currentCardIndex,
    showAnswer: state.quiz.showAnswer,
    score: state.quiz.score
  }
}

export default connect(mapStateToProps)(QuizButtons);
