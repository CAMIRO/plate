/**
 * Map
 */
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import MapView, { Circle } from 'react-native-maps';
import styles from './styles.js';

class Map extends Component {
  watchId = 0;
  state = {
    markers: [],
    region: {
      latitude: null,
      longitude: null,
      latitudeDelta: null,
      longitudeDelta: null
    },
    position: {
      latitude: null,
      longitude: null
    }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this._geolocateUser(position), // success geolocation
      () => {}, // this._msgErrorGps(Actions.neumaticos3),								// err geolocation
      { enableHighAccuracy: false, timeout: 5000 } // config
    );

    this.watchId = navigator.geolocation.watchPosition(position => {
      this._geolocateUser(position);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  _geolocateUser = position => {
    this.setState({
      ...this.state,
      region: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }
    });
  };

  _msgErrorGps = action => {
    Alert.alert(
      '',
      'Active el módulo GPS y vuelva a intentarlo.', // Active el módulo GPS y vuelva a intentarlo.
      [{ text: 'ok', onPress: () => action() }]
    );
  };

  render() {
    var ubicacion = null;
    var touchMarker = null;

    if (this.props.position !== null) {
      /*
      ubicacion = (
        <View style={{ flex:1, marginTop: 20, alignItems: 'flex-start', backgroundColor:'red' }}>
          <Text style={{ textAlign:'left', color: COLOR_DARK, fontSize:12 }}>
          Latitud: {`${this.props.position.latitude}\n`}Longitud: {`${this.props.position.longitude}`}
          </Text>
        </View>
      );

      touchMarker = (
        <MapView.Marker
          key={'marker_touch'}
          // image={require('./img/map-marker.png')}
          coordinate={{ latitude: this.props.position.latitude, longitude: this.props.position.longitude }}
        />
      );
      */
    }

    const map = this.state.region.latitude && (
      <MapView
        style={styles.map}
        region={this.state.region}
        onPress={val => this._pressGlobalMap(val)}
        showsUserLocation={true}
        loadingEnabled
        loadingIndicatorColor={'#000'}
        loadingBackgroundColor={'rgba(256, 256, 256, 0.7)'}
      >
        <Circle
          zIndex={1}
          style={{ marginBottom: 50 }}
          key={(
            this.state.region.longitude + this.state.region.latitude
          ).toString()}
          center={this.state.region}
          radius={2000} // en metros
          strokeColor={'#fff'}
          strokeWidth={0.3}
          fillColor={'rgba(163,204,255,0.4)'}
        />
        {this.state.markers.map(value => (
          <MapView.Marker
            key={value.id}
            title={value.nombre}
            coordinate={{ latitude: value.latitud, longitude: value.longitud }}
          />
        ))}

        {this.props.position ? touchMarker : null}
      </MapView>
    );

    return (
      <View sthyle={styles.container}>
        {ubicacion}
        {map}
      </View>
    );
  }
}

Map.propTypes = {
  position: PropTypes.object
};

export default Map;
