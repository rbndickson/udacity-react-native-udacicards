import React from 'react';
import { StyleSheet, View } from 'react-native';

import QuizScore from './QuizScore';
import QuizRemaining from './QuizRemaining';

export default function QuizStatusBar () {
  return (
    <View style={styles.quizHeaderContainer}>
      <QuizScore />
      <QuizRemaining />
    </View>
  );
};

const styles = StyleSheet.create({
  quizHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
})
