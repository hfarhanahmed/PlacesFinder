import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { placeDetailsRequest, predictionRequest } from '../store/epics';
import { addToHistory, setPredictions } from '../store/placesSlice';
import type { RootState } from '../store/store';
import { Input } from '@ant-design/react-native';

export const SearchBar: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const predictions = useSelector((s: RootState) => s.places.predictions);

  const onChange = (val: string) => {
    setText(val);
    if (!val) {
      dispatch(setPredictions([]));
      return;
    }
    dispatch(predictionRequest({ input: val } as any) as any);
  };

  const onSelect = (placeId: string, description: string) => {
    dispatch(addToHistory(description));
    dispatch(placeDetailsRequest({ placeId } as any) as any);
    setText(description);
    dispatch(setPredictions([]));
  };

  return (
    <View style={styles.container}>
      <Input.TextArea
            style={styles.input}
            rows={1}
            allowClear
            placeholder={"Search places"}
            value={text}
            onChangeText={onChange}
          />
      {predictions.length > 0 && (
        <FlatList
          data={predictions}
          keyExtractor={(item) => item.placeId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onSelect(item.placeId, item.description)} style={styles.row}>
              <Text>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%' },
  input: { padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 6 },
  row: { padding: 10, borderBottomWidth: 1 }
});