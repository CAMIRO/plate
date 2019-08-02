/**
 * Drawer
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

// my components
import styles from './styles.js';

const Drawer = ({
  navigation: { navigate }
}) => {
  const _navigateToScreen = (route) => {
    navigate(route);
  };

  const _logout = () => {
    navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.route}>
          <TouchableOpacity onPress={()=>_navigateToScreen('Home')}>
            <Text style={styles.sectionHeadingStyle}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.route}>
          <TouchableOpacity onPress={()=>_navigateToScreen('Profile')}>
            <Text style={styles.sectionHeadingStyle}>
              Perfil
            </Text>
          </TouchableOpacity>
        </View>
        {/* generator route */}
        <View>
          <Text style={styles.sectionHeadingStyle} onPress={()=>_logout()}>
            Salir
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>HeroApp</Text>
      </View>
    </View>
  );
};

Drawer.propTypes = {
  navigation: PropTypes.object
};
Drawer.defaultProps = {};

export default Drawer;
