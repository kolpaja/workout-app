import { Text, View } from 'react-native';
import React from 'react';
import { Workout } from '../../utils/data/types';
import styles from './styles';
import { formatMin } from '../../utils/helpers/general';

const WorkoutItem = ({ item }: { item: Workout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Workout: {item.name}</Text>
      <Text style={styles.duration}>Duration: {formatMin(item.duration)}</Text>
      <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
    </View>
  );
};

export default WorkoutItem;
