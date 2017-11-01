import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

class FeedbackDisplayCard extends Component {
  static propTypes = {
    card: ImmutablePropTypes.map
  }

  render() {
    return (
      <View style={{borderColor: 'black', borderWidth: '2'}} >
        <Text>This app is the best</Text>
      </View>
    );
  }
}

export default FeedbackDisplayCard;