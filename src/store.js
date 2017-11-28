import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Reducers/reducers';

export default function createAppWithStore(initialState = {}, appChildren) {
  const store = createStore(reducers, initialState);
  return (
    <Provider store={store}>
      {appChildren}
    </Provider>
  );
}
