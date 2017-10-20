import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import { createCard } from '../utils/api';
import { addCard } from '../actions';

import { white, black, mainBackgroundColor, mainTextColor } from '../utils/colors';

import Button from './Button';

class NewCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Create New Question',
      headerTitleStyle: {
        fontSize: 18
      },
    };
  }

  state = {
    frontText: '',
    backText: ''
  }

  submitCard = () => {
    const { title } = this.props.navigation.state.params;

    createCard(title, this.state)
    this.props.dispatch(addCard(title, this.state))
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.form}>
        <Text style={styles.textInstructions}>
          Front:
        </Text>
        <TextInput
          multiline = {true}
          style={styles.textInput}
          value={this.state.frontText}
          onChangeText={(frontText) => this.setState({frontText: frontText})}
        />
        <Text style={styles.textInstructions}>
          Back:
        </Text>
        <TextInput
          multiline = {true}
          style={styles.textInput}
          value={this.state.backText}
          onChangeText={(backText) => this.setState({backText})}
        />
        <Button
          onPress={this.submitCard}
          text={'Add Card'}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: mainBackgroundColor
  },
  textInstructions: {
    width: 260,
    fontSize: 20,
    marginTop: 20
  },
  textInput: {
    width: 260,
    height: 120,
    marginTop: 20,
    borderColor: black,
    borderWidth: 1,
    borderRadius:4,
    fontSize: 16,
    color: mainTextColor,
    backgroundColor: white
  }
})

export default connect()(NewCard);
