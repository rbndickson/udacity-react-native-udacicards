import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { getDecks } from '../utils/api';

import { blue, black } from '../utils/colors';

class DeckListItem extends Component {
  render () {
    return (
      <TouchableOpacity
        key={this.props.title}
        style={[styles.listItem, { backgroundColor: this.props.backgroundColor }]}
        onPress={() => {
          this.props.navigation.navigate('Deck', { title: this.props.title })
        }}
      >
        <Text style={styles.listText}>{`${this.props.title} (${this.props.amountOfCards} cards)`}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 25,
    paddingBottom: 25,
    alignItems: 'center'
  },
  listText: {
    paddingLeft: 20,
    paddingRight: 20,
    color: black,
    fontSize: 18
  }
});

export default DeckListItem;
