import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, ListView } from '@ant-design/react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export const HistoryList: React.FC = () => {
  const history:string[] = useSelector((s: RootState) => s.places.searchHistory);
  const listRef = useRef<ListView<any>>(null);

  const onFetch = async (
    page = 1,
    startFetch: (arg0: string[], arg1: number) => void,
    abortFetch: () => void,
  ) => {
    try {
      //This is required to determinate whether the first loading list is all loaded.
      let pageLimit = 30
      startFetch(history, pageLimit)
    } catch (err) {
      abortFetch() //manually stop the refresh or pagination if it encounters network error
    }
  }

  const renderItem = (item: any) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item}</Text>
      </View>
    )
  }

  useEffect(() => {
    // Refresh the list when history changes
    if (listRef.current?.refresh) {
      listRef.current.refresh();
    }
  }, [history]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Searches</Text>
      <ListView
      refreshable={false}
        ref={listRef}
        onFetch={onFetch}
        keyExtractor={(item: any, index: any) =>
          `${item} - ${index}`
        }
        renderItem={renderItem}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  title: { fontWeight: '700', marginBottom: 6 },
  row: { padding: 8, borderBottomWidth: 1 }
});