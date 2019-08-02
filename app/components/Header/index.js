/**
 * Header
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import assets from './../../assets';

// const { width } = Dimensions.get('window');

function Header ({
  title,
  iconBack,
  iconCart,
  iconDrawer,
  iconSearch,
  navigation: {
    openDrawer,
    navigate,
    goBack
  },
  iconNewCustomers
}) {
  /*
  var widthTitle = width;
  if(iconBack){ widthTitle -= 40; }
  if(iconDrawer){ widthTitle -= 40; }
  if(iconCart){ widthTitle -= 40; }
  if(iconSearch){ widthTitle -= 40; }
  if(iconNewCustomers){ widthTitle -= 40; }
  */

  return (
    <View style={ styles.container } >
      <View style={[ styles.containerTitle ]}>
        <Text style={[ styles.title ]}>{title}</Text>
      </View>
      {
        (iconDrawer &&
          <View style={styles.containerIconLeft}>
            <TouchableOpacity style={styles.button} onPress={()=>openDrawer()}>
              <Image
                style={styles.icon}
                source={assets.menu}
                resizeMode={'center'}
              />
              {
                (iconBack &&
                  <Image
                    style={styles.icon}
                    source={assets.backGray}
                    resizeMode={'center'}
                  />
                )
              }
            </TouchableOpacity>
          </View>
        )
      }
      {
        (iconBack &&
          <View style={styles.containerIconLeft}>
            <TouchableOpacity style={styles.button} onPress={() => goBack()}>
              <Image
                style={styles.icon}
                source={iconBack ? assets.backGray : assets.close}
                resizeMode={'center'}
              />
            </TouchableOpacity>
          </View>
        )
      }
      {
        (iconSearch &&
          <View style={styles.containerIconRight}>
            <TouchableOpacity style={styles.buttonRight} onPress={() => navigate('Notifications') }>
              <Image source={assets.notification} style={{ height:24 }} />
            </TouchableOpacity>
          </View>
        )
      }
      {
        (iconNewCustomers &&
          <View style={styles.containerIconRight}>
            <TouchableOpacity style={styles.buttonRight} onPress={() => navigate('NewClient') }>
              <Image source={assets.personAdd} style={{ height:24 }} />
            </TouchableOpacity>
          </View>
        )
      }
      {
        (iconCart &&
          <View style={styles.containerIconRight}>
            <TouchableOpacity style={styles.buttonRight} onPress={() => navigate('ShoppingCart') }>
              <Image source={assets.more} style={{ height:24 }} />
              <Text>Cart</Text>
            </TouchableOpacity>
          </View>
        )
      }
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  iconBack: PropTypes.bool,
  iconCart: PropTypes.bool,
  iconDrawer: PropTypes.bool,
  iconSearch: PropTypes.bool,
  iconNewCustomers: PropTypes.bool,
  navigation: PropTypes.object.isRequired
};

Header.defaultProps = {
  title: '',
  iconBack: false,
  iconCart: false,
  iconDrawer: false,
  iconSearch: false,
  iconNewCustomers: false
};

export default Header;
