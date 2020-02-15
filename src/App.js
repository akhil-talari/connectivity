import React from 'react';
import createHistory from 'history/createBrowserHistory';
import baseDirectory from './base-directory';
import createStore from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Pages from './Pages';
import { ConnectedRouter } from 'react-router-redux';
const { store, persistor, history } = createStore();

window.store = store;

const App = (props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Pages />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
