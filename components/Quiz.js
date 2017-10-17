import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import {
  showAnswer,
  hideAnswer,
  updateCurrentCardIndex,
  updateQuizScore
} from '../actions';

import { white, blue, black } from '../utils/colors';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.scoreContainer}>
          <Text>
            Score: {this.props.score}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>{this.props.deck.cards[this.props.currentCardIndex].frontText}</Text>
        </View>
        <View style={styles.textContainer}>
          {this.props.showAnswer && (
            <Text style={styles.cardText}>{this.props.deck.cards[this.props.currentCardIndex].backText}</Text>
          )}
        </View>
        {this.props.showAnswer
          ? <View>
              <TouchableOpacity
                style={styles.button}
                onPress={ () => {
                  this.props.dispatch(updateQuizScore(this.props.score + 1))
                  if (this.props.currentCardIndex < this.props.deck.cards.length - 1) {
                    this.props.dispatch(updateCurrentCardIndex(this.props.currentCardIndex + 1))
                  }
                  this.props.dispatch(hideAnswer())
                }}
                >
                <Text style={styles.buttonText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={ () => {
                  if (this.props.currentCardIndex < this.props.deck.cards.length - 1) {
                    this.props.dispatch(updateCurrentCardIndex(this.props.currentCardIndex + 1))
                  }
                  this.props.dispatch(hideAnswer())
                }}
                >
                <Text style={styles.buttonText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          : <TouchableOpacity
              style={styles.button}
              onPress={ () => {
                this.props.dispatch(showAnswer())
              }}
              >
              <Text style={styles.buttonText}>Show Answer</Text>
            </TouchableOpacity>
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
  textInstructions: {
    width: 200
  },
  textInput: {
    width: 200,
    height: 40,
    marginTop: 20,
    borderColor: blue,
    borderWidth: 1,
    color: black
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
  },
  textContainer: {
    height: 60
  },
  cardText: {
    fontSize: 18
  },
  scoreContainer: {
    paddingBottom: 20
  }
})

function mapStateToProps (state, { navigation }) {
  const title = navigation.state.params.title;

  return {
    deck: state.decks[title],
    currentCardIndex: state.quiz.currentCardIndex,
    showAnswer: state.quiz.showAnswer,
    score: state.quiz.score
  }
}

export default connect(mapStateToProps)(Quiz);
