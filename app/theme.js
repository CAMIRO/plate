import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const scalingFactors = {
  max: 15,
  big: 20,
  small: 30,
  normal: 25,
  moneyTitle: 10
};

// scaling font size
export const fontSmall = width / scalingFactors.small;
export const fontNormal = width / scalingFactors.normal;
export const fontBig = width / scalingFactors.big;
export const fontMax = width / scalingFactors.max;

// colors
export const primaryColor = '#faa12f';
export const secundaryColor = '#fff';
export const gray0 = '#ddd';
export const gray1 = '#bbb';
export const gray2 = '#888';
export const gray3 = '#333';
export const blank0 = '#fff';
export const black0 = '#000';
export const lightGrey0 = '#fbfbfb';
export const lightGrey1 = '#f5f5f5';
export const lightGrey2 = '#f0f0f0';
export const lightGrey6 = '#b5b5b5';
export const lightGrey7 = '#9e9e9e';
export const lightGrey8 = '#8c8c8c';
export const lightGrey9 = '#727272';
export const red0 = '#ff0000';

// margin
export const marginDefault = 10;
