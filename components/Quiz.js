import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { setQuizDeck, resetQuiz } from '../actions';

import QuizCard from './QuizCard';
import QuizScore from './QuizScore';
import QuizButtons from './QuizButtons';
import QuizComplete from './QuizComplete';

import { white } from '../utils/colors';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  componentDidMount () {
    this.props.dispatch(resetQuiz())
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.quizComplete
          ? <QuizComplete />
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
  }
})

function mapStateToProps (state) {
  return {
    quizComplete: state.quiz.complete,
  }
}

export default connect(mapStateToProps)(Quiz);