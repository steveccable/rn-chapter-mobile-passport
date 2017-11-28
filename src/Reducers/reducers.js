import { combineReducers } from 'redux';

function firebase(state = {}, action) {
  // Nothing... FOR NOW
  return state;
}

const passportReducers = combineReducers({
  // Add reducers here as we make them
  firebase
});
export default passportReducers;
