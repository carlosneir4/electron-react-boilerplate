// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import directory from './directory';

const rootReducer = combineReducers({
  counter,
  directory,
  router,
});

export default rootReducer;
