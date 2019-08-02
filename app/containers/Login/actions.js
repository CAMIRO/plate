/*
 * Login actions-type
 */
import ApiService from '../../provider/apiService';
import FakeApi from './fake-api';
import {
  DEFAULT_ACTION,
  CLEAR_FORM_ACTION,
  SET_USERNAME_ACTION,
  SET_PASSWORD_ACTION,

  FETCHING_LOGIN_REQUEST,
  FETCHING_LOGIN_SUCCESS,
  FETCHING_LOGIN_FAILURE
} from './actions-type';

export function defaultAction () {
  return {
    type: DEFAULT_ACTION
  };
}
export function clearFormAction () {
  return {
    type: CLEAR_FORM_ACTION
  };
}
export function setUsernameAction (username) {
  return {
    type: SET_USERNAME_ACTION,
    payload: { username }
  };
}
export function setPasswordAction (password) {
  return {
    type: SET_PASSWORD_ACTION,
    payload: { password }
  };
}
export function loginRequest (username, password) {
  return (dispatch) => {
    dispatch({ type: FETCHING_LOGIN_REQUEST });

    return ApiService('authenticate:POST', { username, password })
      .then(resp => {
        resp = FakeApi;
        if (resp.status === 'success') {
          dispatch(loginSuccess({ dataLogin: resp.data }));
        } else {
          dispatch(loginFail({ dataLogin: resp.data }));
        }
        return resp;
      })
      .catch(() => {
        const dataLogin = {
          status: 'GLOBAL_STRS.FAIL',
          msg: 'GLOBAL_STRS.SERVER_ERROR'
        };
        dispatch(loginFail({ dataLogin }));
        return dataLogin;
      });
  };
}
export function loginSuccess ({ dataLogin }){
  return {
    type: FETCHING_LOGIN_SUCCESS,
    payload: { dataLogin }
  };
}

export function loginFail ({ dataLogin }){
  return {
    type: FETCHING_LOGIN_FAILURE,
    payload: { dataLogin }
  };
}
