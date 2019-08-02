import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  parentBody: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    // marginVertical: 10,
    // marginHorizontal: 10,
    paddingHorizontal: 10,
    ...Platform.select({
      android: { elevation: 5 }
    }),
    backgroundColor: '#fff'
  },
  loader: {
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 999999,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
});

export default styles;
