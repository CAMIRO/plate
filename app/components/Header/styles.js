import { StyleSheet } from 'react-native';
import { primaryColor, secundaryColor, fontBig } from './../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 45,
    alignSelf: 'center',
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: primaryColor
    /*
    ...Platform.select({
      android: { elevation: 5 },
    }),
    */
  },
  containerIconLeft: {
    top: 0,
    left: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 45,
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRight: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 16,
    height: 16
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center'
  },
  containerIconRight: {
    width: 40
  },
  title: {
    color: secundaryColor,
    fontSize: fontBig,
    textAlign: 'center',
    fontWeight: '500'
  }
});

export default styles;

