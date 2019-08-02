import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
const store = createStore(
  rootReducers(),
  {}, // initial state
  compose(applyMiddleware(loggerMiddleware, thunk))
);

export default store;
