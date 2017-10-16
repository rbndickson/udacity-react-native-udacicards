import React, { Component } from 'react';
import {Text, View } from 'react-native';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  render() {
    return (
      <View>
        <Text>...</Text>
      </View>
    )
  }
};

export default Deck;
