import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { white, blue, black } from '../utils/colors';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={styles.container}>
        <Text>{`${this.props.deck.cards.length} cards`}</Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={ () => {
              navigation.navigate('NewCard', {title: deck.title})
            }}
          >
            Add New Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take Quiz</Text>
        </TouchableOpacity>
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
    borderColor: blue,
    borderWidth: 2,
  },
  buttonText: {
    color: blue,
    fontSize: 18,
    textAlign: 'center'
  }
})

function mapStateToProps (state, { navigation }) {
  const title = navigation.state.params.title;

  return {
    deck: state[title]
  }
}

export default connect(mapStateToProps)(Deck);
