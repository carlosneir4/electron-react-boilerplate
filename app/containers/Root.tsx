// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes';
import { History } from 'history';

type RootType = {
  store: {},
  history: {}
};

export default function Root({ store, history }: RootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history as History}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}
