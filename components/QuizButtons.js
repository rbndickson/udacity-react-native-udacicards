import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { showAnswer } from '../actions';

import { mainTextColor, headerTextColor } from '../utils/colors';

import QuizButtonsReportAnswer from './QuizButtonsReportAnswer';

class QuizButtons extends Component {
  handleShowAnswer = () => {
    this.props.dispatch(showAnswer())
  }

  render() {
    return (
      <View>
        {this.props.showAnswer
          ? <QuizButtonsReportAnswer />
          : <TouchableOpacity
              onPress={this.handleShowAnswer}
              text={'Show Answer'}
              style={[styles.button, styles.showAnswerButton]}
            >
              <Text style={styles.showAnswerButtonText}>
                Show Answer
              </Text>
            </TouchableOpacity>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  showAnswerButton: {
    backgroundColor: mainTextColor,
    height: 100
  },
  showAnswerButtonText: {
    color: headerTextColor,
    fontSize: 20
  }
})

function mapStateToProps (state) {
  return {
    showAnswer: state.quiz.showAnswer,
  };
}

export default connect(mapStateToProps)(QuizButtons);
