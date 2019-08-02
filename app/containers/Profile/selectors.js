import { createSelector } from 'reselect';

/**
 * Direct selector to the profile state domain
 */
const selectProfileDomain = () => state => state.Profile;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Profile
 */
const selectProfile = () => createSelector(
  selectProfileDomain(),
  (substate) => substate.toJS()
);

export default selectProfile;
export {
  selectProfileDomain
};
