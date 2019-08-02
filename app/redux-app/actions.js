/*
 * @flow
 * ReduxApp actions
 */
import {
  DEFAULT_ACTION,

  SET_PATH_IMAGE_USER,
  SET_IS_ONLINE,
  SET_CONNECTION_TYPE
} from './actions-type';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}
export function setPathImageUser(pathImageUser) {
  return {
    type: SET_PATH_IMAGE_USER,
    payload: { pathImageUser }
  };
}
export function setIsOnline(isOnline) {
  return {
    type: SET_IS_ONLINE,
    payload: { isOnline }
  };
}
export function setConnectionInfo(connectionInfo) {
  return {
    type: SET_CONNECTION_TYPE,
    payload: { connectionInfo }
  };
}
