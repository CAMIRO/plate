import { StyleSheet } from 'react-native';
import { primaryColor, secundaryColor } from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  footerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: primaryColor
  },
  footerText: {
    color: secundaryColor
  }
});

export default styles;
