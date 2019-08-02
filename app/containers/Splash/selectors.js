import { createSelector } from 'reselect';

/**
 * Direct selector to the splash state domain
 */
const selectSplashDomain = () => state => state.Splash;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Splash
 */
const selectSplash = () => createSelector(
  selectSplashDomain(),
  (substate) => substate.toJS()
);

export default selectSplash;
export {
  selectSplashDomain
};
