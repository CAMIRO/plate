/*
 * ReduxApp reducer
 */
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_PATH_IMAGE_USER,
  SET_IS_ONLINE,
  SET_CONNECTION_TYPE
} from './actions-type';

const appInitialState = fromJS({
  isOnline: false,
  pathImageUser: '',
  connectionInfo: {
    type: 'none',
    effectiveType: 'unknown'
  }
});

function reducerApp(state = appInitialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_PATH_IMAGE_USER:
      return state.set('pathImageUser', action.payload.pathImageUser);
    case SET_IS_ONLINE:
      return state.set('isOnline', action.payload.isOnline);
    case SET_CONNECTION_TYPE:
      return state.set('connectionInfo', action.payload.connectionInfo);

    default:
      return state;
  }
}

export default reducerApp;
