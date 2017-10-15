import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { white, black, blue } from '../utils/colors';

import { getDecks } from '../utils/api';
import { addDecks } from '../actions';

class DeckList extends Component {
  componentDidMount() {
    getDecks()
      .then((decks) => {
        this.props.dispatch(addDecks(JSON.parse(decks)))
      })
  }

  render() {
    return (
      <View style={styles.list}>
        {this.props.deckTitles.map(deckTitle => (
          <TouchableOpacity
            key={deckTitle}
            style={styles.listItem}
            >
            <Text style={styles.listText}>{deckTitle}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
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

function mapStateToProps (state) {
  const deckTitles = Object.keys(state).map(key => (state[key].title));

  return {
    deckTitles: deckTitles
  }
}

export default connect(mapStateToProps)(DeckList)
