import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  bar: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 55,
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  text: {
    color: '#f0f0f0',
    fontSize: 16,
    fontWeight: '500'
  }
});

export default styles;
