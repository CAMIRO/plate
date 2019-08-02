/*
 * Login
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from './actions';
import selectLogin from './selectors';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
// import { resetLoginAction } from '../../routeActions';
import styles from './styles.js';

// components
import BodyContainer from '../../components/BodyContainer';
import FormInput from '../../components/FormInput';

export class Login extends React.Component {
  styleInput = {
    stylePlaceHolder: { color: '#036BA4' },
    styleInputContainer: { borderWidth: 0, backgroundColor: 'transparent', borderBottomWidth: 1 },
    styleInput:{}
  }
  _handlerLogin (){
    const {
      navigation : {
        navigate
      }
      // dispatch,
      // username,
      // password,
      // loginRequest,
    } = this.props;
    navigate('App');
    /*
    loginRequest(username, password).then(response => {
      console.log(response);  // eslint-disable-line
    });
    */
  }
  render () {
    const {
      navigation: {
        navigate
      },
      // reducer
      username,
      password,
      // action
      setUsernameAction,
      setPasswordAction
    } = this.props;
    return (
      <BodyContainer style={styles.container}>
        <View style={styles.head} />
        <View style={styles.body}>
          <View style={{ height: 18 }} />
          <FormInput placeholder={'Username'} {...this.styleInput} value={username} onChangeText={(val)=>setUsernameAction(val)} />
          <FormInput placeholder={'Password'} {...this.styleInput} value={password} onChangeText={(val)=>setPasswordAction(val)} />
          <View style={{ height: 9 }} />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={()=>this._handlerLogin()}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>navigate('Register')}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </BodyContainer>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object,
  // reducer
  username: PropTypes.string,
  password: PropTypes.string,
  // action
  setUsernameAction: PropTypes.func,
  setPasswordAction: PropTypes.func,
  loginRequest: PropTypes.func
};

Login.navigationOptions = ({ navigation, screenProps }) => ({
  header: null
});

const mapStateToProps = selectLogin();

function mapDispatchToProps (dispatch) {
  const actions = bindActionCreators(LoginActions, dispatch);
  return {
    dispatch,
    ...actions
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
