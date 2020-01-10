import React from 'react';
import createHistory from 'history/createBrowserHistory';
import baseDirectory from './base-directory';
//import history from './store';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router';
import Pages from './Pages';
const historyArgs = baseDirectory ? { basename: baseDirectory } : {};
console.log('historyArgs', historyArgs);
const history = createHistory(historyArgs);
const App = (props) => (
  <Router history={history}>
    <Pages />
  </Router>
);

export default App;
