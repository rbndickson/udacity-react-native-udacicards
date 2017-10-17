import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { setQuizDeck } from '../actions';

import QuizCard from './QuizCard';
import QuizScore from './QuizScore';
import QuizButtons from './QuizButtons';

import { white } from '../utils/colors';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.quizComplete
          ? <View>
              <Text style={styles.quizCompleteTitle}>
                Quiz Complete!
              </Text>
              <Text style={styles.quizCompleteBody}>
                {`You scored ${this.props.score} out of ${this.props.cardQuantity}.`}
              </Text>
            </View>
          : <View>
              <QuizScore />
              <QuizCard />
              <QuizButtons />
            </View>
        }
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
  quizCompleteTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  quizCompleteBody: {
    fontSize: 18,
    textAlign: 'center'
  }
})

function mapStateToProps (state) {
  return {
    quizComplete: state.quiz.complete,
    score: state.quiz.score,
    cardQuantity: state.decks[state.quiz.title].cards.length
  }
}

export default connect(mapStateToProps)(Quiz);
