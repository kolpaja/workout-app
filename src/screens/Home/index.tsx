import React, { useEffect } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../../utils/data/data.json';
import { Workout } from '../../utils/data/types';
import WorkoutItem from '../../components/WorkoutItem';
import {
  getWorkouts,
  initWorkouts,
} from '../../utils/helpers/storage/workouts';
import styles from './styles';

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const PressableItem = ({ item }: { item: Workout }) => (
    <Pressable
      onPress={() => navigation.navigate('WorkoutPreview', { slug: item.slug })}
    >
      <WorkoutItem item={item} />
    </Pressable>
  );

  useEffect(() => {
    async function loadData() {
      try {
        initWorkouts();
      } catch (error) {
        console.log(error);
      } finally {
        getWorkouts();
      }
    }
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Workouts</Text>

      <FlatList
        data={data as Workout[]}
        keyExtractor={(item) => item.slug}
        renderItem={PressableItem}
      />
    </View>
  );
};

export default HomeScreen;
