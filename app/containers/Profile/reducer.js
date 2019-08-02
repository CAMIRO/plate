/*
 * Profile reducer
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_NAME_ACTION,
  SET_LASTNAME_ACTION,
  SET_EMAIL_ACTION,
  SET_BIRTH_DATE_ACTION,
  SET_NIT_ACTION,
  SET_GENDER_ACTION,
  SET_FORM_ACTION
} from './actions-type';

const initialState = fromJS({
  name: '',
  lastname: '',
  email: '',
  birthDate: '',
  nit: '',
  gender: '',
  form: false
});

function profileReducer (state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_NAME_ACTION:
      return state.set('name', action.payload.name);
    case SET_LASTNAME_ACTION:
      return state.set('lastname', action.payload.lastname);
    case SET_EMAIL_ACTION:
      return state.set('email', action.payload.email);
    case SET_BIRTH_DATE_ACTION:
      return state.set('birthDate', action.payload.birthDate);
    case SET_NIT_ACTION:
      return state.set('nit', action.payload.nit);
    case SET_GENDER_ACTION:
      return state.set('gender', action.payload.gender);
    case SET_FORM_ACTION:
      return state;
    default:
      return state;
  }
}

export default profileReducer;
