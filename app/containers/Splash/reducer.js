/*
 * Home reducer
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION
} from './actions-type';

const initialState = fromJS({});

function splashReducer (state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default splashReducer;
