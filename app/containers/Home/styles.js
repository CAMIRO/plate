import { StyleSheet, Platform } from 'react-native';
import { secundaryColor, fontMax, fontNormal } from '../../theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  containerHeader: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#036BA4'
  },
  containerProduct: {
    margin: 10,
    backgroundColor: secundaryColor,
    ...Platform.select({
      android: { elevation: 5 }
    })
  },
  containerCategory: {
    marginBottom: 3,
    marginHorizontal: 2
  },
  containerLogo: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  logo: {
    width: 60,
    height: 80,
    alignSelf: 'center',
    borderRadius: 20
  },
  imageModule: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    borderRadius: 20
  },
  containerPadre: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30
  },
  containerModule: {
    flex: 0.5,
    flexDirection: 'column'
  },
  textModule: {
    marginTop: 7,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  titleCategory: {
    color: secundaryColor,
    fontSize: fontMax,
    fontWeight: '600'
  },
  descriptionCategory: {
    color: secundaryColor,
    fontSize: fontNormal,
    fontWeight: '600'
  }
});

export default styles;
