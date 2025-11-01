import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export const MapViewComponent: React.FC = () => {
  const mapRef = useRef(null);
  const selected = useSelector((s: RootState) => s.places.selected);

  useEffect(() => {
    if (selected && mapRef.current) {
      // @ts-ignore
      mapRef.current.animateToRegion({
        latitude: selected.lat,
        longitude: selected.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }, 500);
    }
  }, [selected]);
  
  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={{ latitude:3.147080, longitude:101.698995, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
    >
      {selected && <Marker coordinate={{ latitude: selected.lat, longitude: selected.lng }} title={selected.name} description={selected.address} />}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1 },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});