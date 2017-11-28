import { connect } from 'react-redux';
import FeedbackDisplayScreen from './FeedbackDisplayScreen';

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase
  };
};

const FeedbackDisplayScreenContainer = connect(mapStateToProps)(FeedbackDisplayScreen);

export default FeedbackDisplayScreenContainer;
