/*
 * Register actions
 */
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

export function defaultAction () {
  return {
    type: DEFAULT_ACTION
  };
}
export function setNameAction (name) {
  return {
    type: SET_NAME_ACTION,
    payload: { name }
  };
}
export function setLastnameAction (lastname) {
  return {
    type: SET_LASTNAME_ACTION,
    payload: { lastname }
  };
}
export function setEmailAction (email) {
  return {
    type: SET_EMAIL_ACTION,
    payload: { email }
  };
}
export function setBirthDateAction (birthDate) {
  return {
    type: SET_BIRTH_DATE_ACTION,
    payload: { birthDate }
  };
}
export function setNitAction (nit) {
  return {
    type: SET_NIT_ACTION,
    payload: { nit }
  };
}
export function setGenderAction (gender) {
  return {
    type: SET_GENDER_ACTION,
    payload: { gender }
  };
}
export function setFormAction (form) {
  return {
    type: SET_FORM_ACTION,
    payload: { form }
  };
}
