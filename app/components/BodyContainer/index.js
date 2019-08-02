/**
 * BodyContainer
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles.js';
import { primaryColor } from '../../theme';

const BodyContainer = ({ children, style, loader, parentStyle }) => (
  <View style={[styles.parentBody, parentStyle]}>
    <View style={[styles.container, style]}>
      {children}
    </View>
    {
      loader &&
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={primaryColor} />
      </View>
    }
  </View>
);
BodyContainer.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  loader: PropTypes.bool,
  parentStyle: PropTypes.object
};
BodyContainer.defaultProps = {
  style: {},
  loader: false,
  parentStyle: {}
};
export default BodyContainer;

