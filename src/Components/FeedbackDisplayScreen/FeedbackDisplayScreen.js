import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

class FeedbackDisplayScreen extends Component {
  static propTypes = {
    cards: ImmutablePropTypes.list,
    firebase: PropTypes.any
  }

  static defaultProps = {
    cards: Immutable.List()
  }

  render() {
    // TODO when we have proper Redux integration, map state to props to get cards
    // OR on initial load (and potentially refresh) fetch new cards. TBD based on firebase
    const { cards, firebase } = this.props;
    console.log('about to tell you about the wonders of firebase, all hooked up to redux');
    console.log(firebase);
    const renderedCards = cards.map(card => {
      return <FeedbackDisplayCard card={card} />;
    });
    return (
      <ScrollView>
        {renderedCards}
      </ScrollView>
    );
  }
}

export default FeedbackDisplayScreen;