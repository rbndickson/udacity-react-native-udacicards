import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class QuizScore extends Component {
  render() {
    return (
      <View style={styles.scoreContainer}>
        <Text>
          Score: {this.props.score}
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  scoreContainer: {
    paddingBottom: 20
  }
})

function mapStateToProps (state) {
  return {
    score: state.quiz.score,
  }
}

export default connect(mapStateToProps)(QuizScore);
