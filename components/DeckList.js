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
        {this.props.deckTitles.map(title => (
          <DeckListItem
            title={title}
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
  const deckTitles = Object.keys(state).map(key => (state[key].title));

  return {
    deckTitles: deckTitles
  };
}

export default connect(mapStateToProps)(DeckList);
