import React from 'react';
import { Provider } from 'react-redux';
import { AuthContainer } from '~/containers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './redux';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);

export default function ReactModoro() {
  return (
    <Provider store={store}>
      <AuthContainer />
    </Provider>
  );
}
