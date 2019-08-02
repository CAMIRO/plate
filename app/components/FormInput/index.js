/**
 * FormInput
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import styles from './styles.js';

class FormInput extends Component {
  placeholderSeleted = {
    top: -16,
    left: 0,
    right: 8,
    color: '#036BA4',
    fontSize: 12
  };
  placeholderDefault = {
    top: 10,
    left: 16,
    right: 16,
    fontSize: 16,
    color: '#9e9e9e'
  };
  state = this.placeholderDefault;

  componentDidMount() {
    // this.setState(this.placeholderDefault);
  }
  onFocus = () => {
    this.setState(this.placeholderSeleted);
  };
  onBlur = () => {
    const { value, onChangeText } = this.props;
    if (value && value.length > 0) {
      this.setState(this.placeholderSeleted);
    } else {
      this.setState(this.placeholderDefault);
    }
    onChangeText(value, true);
  };
  render() {
    const {
      value,
      placeholder,
      keyboardType,
      onChangeText,
      styleInput,
      styleContainer,
      secureTextEntry,
      stylePlaceHolder,
      selectTextOnFocus,
      styleInputContainer
    } = this.props;
    const borderBottomColor =
      stylePlaceHolder.color && this.state.top !== 10
        ? stylePlaceHolder.color
        : '#9e9e9e';
    return (
      <View style={[styles.container, styleContainer]}>
        <Text
          style={[
            styles.placeholder,
            value !== '' ? this.placeholderSeleted : this.state,
            stylePlaceHolder
          ]}
        >
          {this.state.top !== 10 ? placeholder : ''}
        </Text>
        <View
          style={[
            styles.textInputContainer,
            styleInputContainer,
            { borderBottomColor }
          ]}
        >
          <TextInput
            style={[styles.textInput, styleInput]}
            keyboardType={keyboardType}
            underlineColorAndroid="transparent"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChangeText={onChangeText}
            value={value}
            placeholder={this.state.top === 10 ? placeholder : ''}
            placeholderTextColor={'#9e9e9e'}
            selectTextOnFocus={selectTextOnFocus}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
    );
  }
}
FormInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  styleInput: PropTypes.object,
  styleContainer: PropTypes.object,
  stylePlaceHolder: PropTypes.object,
  secureTextEntry: PropTypes.bool,
  selectTextOnFocus: PropTypes.bool,
  styleInputContainer: PropTypes.object
};
FormInput.defaultProps = {
  value: '',
  keyboardType: 'default',
  onChangeText: () => {},
  styleInput: {},
  styleContainer: {},
  secureTextEntry: false,
  stylePlaceHolder: {},
  selectTextOnFocus: false,
  styleInputContainer: {}
};
export default FormInput;
