import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { resetQuiz } from '../actions';

import QuizStatusBar from './QuizStatusBar';
import QuizCard from './QuizCard';
import QuizButtons from './QuizButtons';
import QuizComplete from './QuizComplete';

import { white } from '../utils/colors';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Quiz: ${navigation.state.params.title}`
    };
  };

  componentDidMount () {
    this.props.dispatch(resetQuiz())
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.quizComplete
          ? <QuizComplete navigation={this.props.navigation} />
          : <View style={styles.quizContainer}>
              <QuizStatusBar />
              <QuizCard />
              <QuizButtons />
            </View>
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1
  },
  quizContainer: {
    justifyContent: 'space-between',
    flex: 1
  }
})

function mapStateToProps (state) {
  return {
    quizComplete: state.quiz.complete,
  };
}

export default connect(mapStateToProps)(Quiz);
