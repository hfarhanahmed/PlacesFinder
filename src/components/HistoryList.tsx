import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { predictionRequest } from '../store/epics';
import type { RootState } from '../store/store';

export const HistoryList: React.FC = () => {
  const history = useSelector((s: RootState) => s.places.searchHistory);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Searches</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row} onPress={() => dispatch(predictionRequest({ input: item } as any) as any)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  title: { fontWeight: '700', marginBottom: 6 },
  row: { padding: 8, borderBottomWidth: 1 }
});