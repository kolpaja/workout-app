import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import data from '../../utils/data.json';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default HomeScreen;
