/*
 * Splash
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SplashActions from './actions';
import selectSplash from './selectors';
import PropTypes from 'prop-types';
import {
  StatusBar,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import styles from './styles.js';

// components
import BodyContainer from '../../components/BodyContainer';
// import Header from '../../components/Header';

export class Splash extends React.Component {
  constructor (props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    const { navigation: { navigate } } = this.props;
    navigate(userToken ? 'App' : 'Auth');
  };
  // Render any loading content that you like here
  render () {
    return (
      <BodyContainer style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </BodyContainer>
    );
  }
}
Splash.propTypes = {
  navigation: PropTypes.object
};

Splash.navigationOptions = ({ navigation, screenProps }) => ({
  header: 'none'
});

const mapStateToProps = selectSplash();

function mapDispatchToProps (dispatch) {
  const actions = bindActionCreators(SplashActions, dispatch);
  return {
    dispatch,
    ...actions
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
