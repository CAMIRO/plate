import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';
// import Screen
import Profile from './containers/Profile/index';
import Splash from './containers/Splash/index';
import Register from './containers/Register/index';
import Login from './containers/Login/index';
import Home from './containers/Home/index';
import Drawer from './components/Drawer';

const MainScreen = createStackNavigator(
  {
    // navigation Screen
    Profile,
    Home
  },
  {
    initialRouteName: __DEV__ ? 'Home' : 'Home',
    contentComponent: Drawer
  }
);

const DrawerStack = createDrawerNavigator(
  {
    MainScreen: { screen: MainScreen }
  },
  {
    contentComponent: Drawer
  }
);

const AuthStack = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register }
});

const SwitchNavigator = createSwitchNavigator(
  {
    App: DrawerStack,
    Auth: AuthStack,
    AuthLoading: Splash
  },
  {
    headerMode: 'none',
    initialRouteName: __DEV__ ? 'App' : 'Login'
  }
);

export default createAppContainer(SwitchNavigator);
