/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
/* import AppNavigator from './routes'; */
import { primaryColor } from './theme';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
          {/* <AppNavigator /> */}
        </View>
      </Provider>
    );
  }
}

export default App;
