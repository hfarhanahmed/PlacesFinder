import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HistoryList } from '../../components/HistoryList';
import { MapViewComponent } from '../../components/MapViewComponent';
import { SearchBar } from '../../components/SearchBar';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
      </View>
      <View style={styles.mapContainer}>
        <MapViewComponent />
      </View>
      <View style={styles.history}>
        <HistoryList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  header: { height: 120 },
  mapContainer: { flex: 1 },
  history: { height: 160 }
});

export default HomeScreen;