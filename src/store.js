import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import reduxModule from './redux-modules';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import baseDirectory from './base-directory';

const sagaMiddleware = createSagaMiddleware();

const { screenSignIn } = reduxModule;

const appReducer = combineReducers({
  screenSignIn: screenSignIn.reducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'APPNAME-PERSIST',
  blacklist: [],
  storage,
  migrate: (state) => {
    const handler = (yay, nay) => {
      yay(state);
    };

    return new Promise(handler);
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools({});
const historyArgs = baseDirectory ? { basename: baseDirectory } : {};
const history = createHistory(historyArgs);
const routerMiddlewareWithHistory = routerMiddleware(history);

export default () => {
  const inProduction = process.env['REACT_APP_DATA_ENV'] === 'production';

  const middlewares = applyMiddleware(
    sagaMiddleware,
    routerMiddlewareWithHistory
  );

  const enhancers = inProduction ? middlewares : composeEnhancers(middlewares);

  const store = createStore(persistedReducer, enhancers);
  // console.log("store.getState()----", store.getState());
  let persistor = persistStore(store);
  //   [screenSignIn].forEach((mod) => mod.sagas.map(sagaMiddleware.run));
  [screenSignIn].forEach((mod) => mod.sagas.map(sagaMiddleware.run));
  return { store, persistor, history };
};
