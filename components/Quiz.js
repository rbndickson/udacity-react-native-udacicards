import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { setQuizDeck, resetQuiz } from '../actions';

import QuizStatusBar from './QuizStatusBar';
import QuizCard from './QuizCard';
import QuizButtons from './QuizButtons';
import QuizComplete from './QuizComplete';

import { mainBackgroundColor } from '../utils/colors';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Quiz: ${navigation.state.params.title}`
    };
  }

  componentDidMount () {
    this.props.dispatch(resetQuiz())
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.quizComplete
          ? <QuizComplete navigation={this.props.navigation} />
          : <View>
              <QuizStatusBar />
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
    backgroundColor: mainBackgroundColor
  }
})

function mapStateToProps (state) {
  return {
    quizComplete: state.quiz.complete,
  }
}

export default connect(mapStateToProps)(Quiz);
