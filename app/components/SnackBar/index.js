/**
 * SnackBar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Animated
} from 'react-native';
import styles from './styles.js';

class SnackBar extends Component {
  state = {
    animation: new Animated.Value(0)
  }
  componentWillUnmount () {
    if (this.timeOutID) { clearTimeout(this.timeOutID); }
  }
  componentDidUpdate (prevProps) {
    const {
      visible,
      duration,
      onRequestClose
    } = this.props;
    if (visible !== prevProps.visible) {
      Animated.spring(this.state.animation, {
        toValue: visible ? 55 : 0,
        tension: 5,
        friction: 6,
        velocity: 10,
        duration: 1
      }).start();
      if (this.timeOutID) {clearTimeout(this.timeOutID);}
      this.timeOutID = setTimeout(() => {
        onRequestClose();
      }, duration);
    }
  }
  render () {
    const { animation } = this.state;
    const { text } = this.props;
    return (
      <Animated.View
        style={[styles.container, { height: animation }]}
      >
        <View style={styles.bar}>
          <Text
            style={styles.text}
            numberOfLines={2}
            ellipsizeMode={'tail'}
          >
            {text}
          </Text>
        </View>
      </Animated.View>
    );
  }
}

SnackBar.propTypes = {
  text: PropTypes.string,
  visible: PropTypes.bool,
  duration: PropTypes.number,
  onRequestClose: PropTypes.func
};

SnackBar.defaultProps = {
  text: '?',
  visible: false,
  duration: 5000,
  onRequestClose: () => {}
};

export default SnackBar;
