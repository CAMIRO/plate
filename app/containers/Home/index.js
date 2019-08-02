/*
 * Home
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomeActions from './actions';
import selectHome from './selectors';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import styles from './styles.js';

// components
import BodyContainer from '../../components/BodyContainer';
import Header from '../../components/Header';

export class Home extends React.Component {
  acumRow = [];
  acumWidth = 0;

  _compositeGrid = (item, index) => {
    const {
      navigation: {
        navigate
      }
    } = this.props;
    var element = (
      <TouchableOpacity style={[ { flex: item.width }, styles.containerProduct ]} key={ index }>
        <Image source={{ uri: item.image }} style={{ width: '100%', height: 120 }} />
        <View style={{ alignItems: 'center', padding: 10 }}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
    if (item.type === 'categoria'){
      element = (
        <TouchableOpacity
          key={ index }
          style={[ { flex: item.width }, styles.containerCategory ] }
          onPress={()=>navigate('Products', { idCategory: item.id, nameCategory: item.title })}
        >
          <ImageBackground source={{ uri: item.image }} style={{ width: '100%', height: 120 }}>
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>
                <Text style={styles.titleCategory}>{item.title + '\n'}</Text>
                <Text style={styles.descriptionCategory}>{item.description}</Text>
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    }
    this.acumWidth += item.width * 1;
    this.acumRow.push(element);
    if (this.acumWidth < 1) { return; }
    const row = <View style={{ flexDirection: 'row' }} key={index}>{ this.acumRow }</View>;
    this.acumWidth = 0;
    this.acumRow = [];
    return row;
  }

  render () {
    const { navigation } = this.props; // eslint-disable-line no-unused-vars
    const fakeArray = [
      {
        id: 1,
        type: 'categoria',
        width: 1,
        image: 'https://fakeimg.pl/300/',
        title: 'Coffee',
        description: 'Freshly brewed coffee'
      },
      {
        id: 2,
        type: 'categoria',
        width: 0.5,
        image: 'https://fakeimg.pl/300/',
        title: 'Coffee',
        description: 'Freshly brewed coffee'
      },
      {
        id: 2,
        type: 'categoria',
        width: 0.5,
        image: 'https://fakeimg.pl/300/',
        title: 'Coffee',
        description: 'Freshly brewed coffee'
      },
      {
        id: 2,
        type: 'producto',
        width: 0.5,
        image: 'https://fakeimg.pl/300/',
        title: 'Coffee',
        description: 'Freshly brewed coffee'
      },
      {
        id: 2,
        type: 'producto',
        width: 0.5,
        image: 'https://fakeimg.pl/300/',
        title: 'Coffee',
        description: 'Freshly brewed coffee'
      }
    ];
    return (
      <View style={styles.container}>
        <BodyContainer style={{ backgroundColor:'#fff', flex:1, flexDirection: 'column', paddingHorizontal: 0 }}>
          <ScrollView>
            {
              fakeArray.map((item, index) => {
                return this._compositeGrid(item, index);
              })
            }
          </ScrollView>
        </BodyContainer>
      </View>
    );
  }
}
Home.propTypes = {
  navigation: PropTypes.object
};

Home.navigationOptions = ({ navigation, screenProps }) => ({
  header: (
    <Header
      title={'Home'}
      iconDrawer={true}
      navigation={navigation}
    />
  )
});

const mapStateToProps = selectHome();

function mapDispatchToProps (dispatch) {
  const actions = bindActionCreators(HomeActions, dispatch);
  return {
    dispatch,
    ...actions
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
