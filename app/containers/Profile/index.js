/*
 * Profile
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProfileActions from './actions';
import selectProfile from './selectors';
import {
  View,
  Text,
  ScrollView,
  // ImageBackground,
  TouchableOpacity
} from 'react-native';

// my components
// import Assets from './../../assets';
import FormInput from '../../components/FormInput';
import BackButton from '../../components/BackButton';
import BodyContainer from '../../components/BodyContainer';

import styles from './styles.js';

export class Profile extends React.Component {
  styleInput = {
    stylePlaceHolder: { color: '#036BA4' },
    styleInputContainer: { borderWidth: 0, backgroundColor: 'transparent', borderBottomWidth: 1 },
    styleInput:{}
  }
  componentDidMount (){
  }
  render () {
    const {
      navigation,
      // reducer
      name,
      lastname,
      email,
      birthDate,
      nit,
      gender,
      // actions
      setNameAction,
      setLastnameAction,
      setEmailAction,
      setBirthDateAction,
      setNitAction,
      setGenderAction
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <BackButton navigation={navigation} />
          <View style={styles.containerLogo}>
            { /* <ImageBackground style={styles.logo} source={ Assets.logoCrearp } /> */ }
          </View>
          <Text style={styles.title}>PERFIL</Text>
        </View>
        <BodyContainer style={{ backgroundColor:'#fff', flex:1 }}>
          <ScrollView style={styles.scroll}>
            <View style={{ height: 18 }} />
            <FormInput placeholder={'Nombre'} {...this.styleInput} value={name} onChangeText={(val)=>setNameAction(val)} />
            <FormInput placeholder={'Apellido'} {...this.styleInput} value={lastname} onChangeText={(val)=>setLastnameAction(val)} />
            <FormInput placeholder={'Email'} {...this.styleInput} value={email} onChangeText={(val)=>setEmailAction(val)} />
            <FormInput placeholder={'Fecha de nacimiento'} {...this.styleInput} value={birthDate} onChangeText={(val)=>setBirthDateAction(val)} />
            <FormInput placeholder={'Nit'} {...this.styleInput} value={nit} onChangeText={(val)=>setNitAction(val)} />
            <FormInput placeholder={'Genero'} {...this.styleInput} value={gender} onChangeText={(val)=>setGenderAction(val)} />
            <View style={{ height: 9 }} />
          </ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.botonRegistrar}>
              <Text style={styles.textRegistrar}>Actualizar</Text>
            </TouchableOpacity>
          </View>
        </BodyContainer>
      </View>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.object,
  // reducer
  name: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  birthDate: PropTypes.string,
  nit: PropTypes.string,
  gender: PropTypes.string,
  // actions
  setNameAction: PropTypes.func,
  setLastnameAction: PropTypes.func,
  setEmailAction: PropTypes.func,
  setBirthDateAction: PropTypes.func,
  setNitAction: PropTypes.func,
  setGenderAction: PropTypes.func
};

Profile.navigationOptions = ({ navigation, screenProps }) => ({
  header: null
});

const mapStateToProps = selectProfile();

function mapDispatchToProps (dispatch) {
  const actions = bindActionCreators(ProfileActions, dispatch);
  return {
    dispatch,
    ...actions
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
