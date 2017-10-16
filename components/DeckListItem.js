import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { blue, white } from '../utils/colors';


const DeckListItem = (props) => (
  <TouchableOpacity
    key={props.title}
    style={styles.listItem}
    onPress={() => {
      props.navigation.navigate('Deck', { title: props.title })
    }}
  >
    <Text style={styles.listText}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: 200,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: blue,
    alignItems: 'center'
  },
  listText: {
    paddingLeft: 20,
    paddingRight: 20,
    color: white,
    fontSize: 18
  }
})

export default DeckListItem
