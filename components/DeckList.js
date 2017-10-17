import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { addDecks } from '../actions';

import { white, black, blue } from '../utils/colors';

import DeckListItem from './DeckListItem';

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
        {this.props.decks.map(deck => (
          <DeckListItem
            title={deck.title}
            amountOfCards={deck.cards.length}
            key={deck.title}
            navigation={this.props.navigation}
          />
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
  }
});

function mapStateToProps (state) {
  const deckKeys = Object.keys(state.decks);
  const decks = deckKeys.map(key => state.decks[key]);

  return {
    decks: decks
  };
}

export default connect(mapStateToProps)(DeckList);
