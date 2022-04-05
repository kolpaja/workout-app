import React from 'react';
import { Text, View } from 'react-native';
import WorkoutForm from '../../components/WorkoutForm';
import { WorkoutFormTypes } from '../../components/WorkoutForm/types';
import styles from './styles';

const PlannerScreen = () => {
  const handleSubmit = (form: WorkoutFormTypes) => {
    console.log('submit form', form);
  };

  return (
    <View style={styles.container}>
      <WorkoutForm onSubmit={handleSubmit} />
    </View>
  );
};

export default PlannerScreen;
