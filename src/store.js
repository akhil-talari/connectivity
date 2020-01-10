import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';

import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import baseDirectory from './base-directory';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});
const historyArgs = baseDirectory ? { basename: baseDirectory } : {};
const history = createHistory(historyArgs);
const routerMiddlewareWithHistory = routerMiddleware(history);

export default history;
