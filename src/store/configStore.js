import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { ADD_DRAGON, EMPTY_DATA } from '../constants/constants';

import { message } from '../actions/types';

const Message = store => next => action => {

  let result = next(action);
  // todo

  return next(action)
}

// todo store