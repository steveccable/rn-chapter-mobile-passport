import React, { Component } from 'react';
import { Button } from 'react-native';
import Immuable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

class FeedbackSubmitButton extends Component {
  static propTypes = {
    formData: ImmutablePropTypes.map
  }

  onPress() {
    const { formData } = this.props;
    const fields = formData.get('elements', Immuable.List());
    const dataToPush = fields.map(element => element.get('data'));
    // TODO actually build this
    pushDataToFirebase(dataToPush);
  }

  render() {
    return <Button title={'SUBMIT'} onPress={this.onPress} />
  }
}

export default FeedbackSubmitButton;