import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerMap: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    position: 'relative',
    alignItems: 'center'
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    width,
    height: height / 3
  }
});

export default styles;
