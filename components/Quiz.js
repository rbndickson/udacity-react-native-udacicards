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
    const title = this.props.navigation.state.params.title;

    return (
      <View style={styles.container}>
        <View>
          <QuizScore />
          <QuizCard />
          <QuizButtons />
        </View>
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
    title: state.quiz.title
  }
}

export default connect(mapStateToProps)(Quiz);
