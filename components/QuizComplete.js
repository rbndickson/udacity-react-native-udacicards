import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { resetQuiz } from '../actions';
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/notifications';

import { white, blue } from '../utils/colors';

class QuizComplete extends Component {
  componentDidMount () {
    clearLocalNotification()
      .then(setLocalNotification)
  }
  handleReset = () => {
    this.props.dispatch(resetQuiz())
  }

  render() {
    return (
      <View>
        <Text style={styles.quizCompleteTitle}>
          Quiz Complete!
        </Text>
        <Text style={styles.quizCompleteBody}>
          {`You scored ${this.props.score} out of ${this.props.cardQuantity}.`}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleReset}
          >
          <Text style={styles.buttonText}>
            Try Again
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  quizCompleteTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  quizCompleteBody: {
    fontSize: 18,
    textAlign: 'center'
  },
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

function mapStateToProps (state) {
  return {
    score: state.quiz.score,
    cardQuantity: state.decks[state.quiz.title].cards.length
  }
}

export default connect(mapStateToProps)(QuizComplete);
