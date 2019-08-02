/*
 * Login reducer
 */
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CLEAR_FORM_ACTION,
  SET_USERNAME_ACTION,
  SET_PASSWORD_ACTION,
  FETCHING_LOGIN_REQUEST,
  FETCHING_LOGIN_SUCCESS,
  FETCHING_LOGIN_FAILURE
} from './actions-type';

const initialState = fromJS({
  username: '',
  password: '',
  loadLogin: false,
  dataLogin: null
});

function loginReducer (state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CLEAR_FORM_ACTION:
      return initialState;
    case SET_USERNAME_ACTION:
      return state.set('username', action.payload.username);
    case SET_PASSWORD_ACTION:
      return state.set('password', action.payload.password);
    case FETCHING_LOGIN_REQUEST:
      return state.set('loadLogin', true);
    case FETCHING_LOGIN_SUCCESS:
      return state
        .set('loadLogin', false)
        .set('dataLogin', action.payload.dataLogin);
    case FETCHING_LOGIN_FAILURE:
      return state
        .set('loadLogin', false)
        .set('dataLogin', action.payload.dataLogin);
    default:
      return state;
  }
}

export default loginReducer;
