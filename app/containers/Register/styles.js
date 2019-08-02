import { StyleSheet } from 'react-native';
import { primaryColor, secundaryColor } from '../../theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fafafa'
  },
  containerHeader: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor
  },
  containerLogo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: primaryColor,
    justifyContent: 'center'
  },
  scroll: {
    marginVertical: 5
  },
  button: {
    height: 40,
    width: 100,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 7,
    backgroundColor: primaryColor
  },
  textButton: {
    color: '#fff',
    fontWeight: '600'
  },
  logo: {
    width: 50,
    color: secundaryColor,
    height: 50,
    alignSelf: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 22,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  back: {
    width: 20,
    height: 20,
    // marginTop: 14,
    marginLeft: 8,
    tintColor: '#fff'
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default styles;
