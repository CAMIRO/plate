import { StyleSheet } from 'react-native';
import { primaryColor, secundaryColor } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1f2f4'
  },
  head: {
    flex: 1
  },
  body: {
    flex: 1
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    width: 100,
    height: 40,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 7,
    backgroundColor: primaryColor,
    marginHorizontal: 30
  },
  textButton: {
    color: secundaryColor,
    fontWeight: '600'
  }
});

export default styles;
