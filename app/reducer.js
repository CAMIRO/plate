import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
// import reducer
import Profile from './containers/Profile/reducer';
import Splash from './containers/Splash/reducer';
import Register from './containers/Register/reducer';
import Login from './containers/Login/reducer';
import Home from './containers/Home/reducer';

const appInitialState = fromJS({});

function appReducer(state = appInitialState, action) {
  switch (action.type) {
    case 'DEFAULT_ACTION':
      return state;
    default:
      return state;
  }
}

export default function rootReducers() {
  return combineReducers({
    // combine reducer
    Profile,
    Home,
    Login,
    Register,
    Splash,
    App: appReducer
  });
}
