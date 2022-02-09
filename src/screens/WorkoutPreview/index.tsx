import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { WorkoutPreviewProps } from './types';

const WorkoutPreview = ({ route }: WorkoutPreviewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>slug: {route.params.slug}</Text>
    </View>
  );
};

export default WorkoutPreview;
