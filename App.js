import React from 'react';
import { Provider } from 'react-redux';
import { AuthContainer } from '~/containers';
import { LOGGING_OUT } from '~/redux/modules/authentication';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from './redux';

const appReducer = combineReducers(reducers);

function rootReducer(state, action) {
  if (action.type === LOGGING_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default function ReactModoro() {
  return (
    <Provider store={store}>
      <AuthContainer />
    </Provider>
  );
}
