import React, { useState } from 'react';
import { FlatList, View, Text, Pressable } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import slugify from 'slugify';

import ExerciseForm from '../../components/forms/ExerciseForm';
import { ExerciseType, Workout, WorkoutSequence } from '../../utils/data/types';
import ExerciseItem from '../../components/ExerciseItem';
import { Modal } from '../../components/Modal';
import { PressableText } from '../../components/styled/PressableText';
import WorkoutForm from '../../components/forms/WorkoutForm';
import { ExerciseFormTypes } from '../../components/forms/ExerciseForm/types';
import { WorkoutFormData } from '../../components/forms/WorkoutForm/types';
import { addNewWorkout } from '../../utils/helpers/storage/workouts';

import styles from './styles';

const computeDifficulty = (exerciseCount: number, duration: number) => {
  const intensity = duration / exerciseCount;
  if (intensity <= 60) {
    return 'hard';
  } else if (intensity <= 120) {
    return 'normal';
  } else {
    return 'easy';
  }
};

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  const [seqItems, setSeqItems] = useState<WorkoutSequence[]>([]);

  const handleCreateExercise = (data: ExerciseFormTypes) => {
    const sequenceItem: WorkoutSequence = {
      slug: slugify(data.name + ' ' + Date.now(), { lower: true, trim: true }),
      name: data.name,
      type: data.type as ExerciseType,
      duration: Number(data.duration),
    };
    if (data.reps) {
      sequenceItem.reps = Number(data.reps);
    }
    setSeqItems([...seqItems, sequenceItem]);
  };

  const handleRemove = (slug: string) => {
    const newSeqItems = seqItems.filter((item) => item.slug !== slug);
    setSeqItems(newSeqItems);
  };

  const handleCreateWorkout = async (data: WorkoutFormData) => {
    const duration = seqItems.reduce((acc, curr) => acc + curr.duration, 0);
    if (seqItems.length > 0) {
      const workout: Workout = {
        slug: slugify(data.name + ' ' + Date.now(), {
          lower: true,
          trim: true,
        }),
        name: data.name,
        difficulty: computeDifficulty(seqItems.length, duration),
        duration,
        sequence: seqItems,
      };
      await addNewWorkout(workout);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={seqItems}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => (
          <ExerciseItem item={item}>
            <Pressable onPressIn={() => handleRemove(item.slug)}>
              <Text>Remove</Text>
            </Pressable>
          </ExerciseItem>
        )}
      />
      <ExerciseForm onSubmit={handleCreateExercise} />
      <Modal
        activator={({ handleOpen }) => (
          <PressableText
            style={{ marginTop: 10 }}
            text='Add Workout'
            onPressIn={handleOpen}
          />
        )}
      >
        {({ handleClose }) => (
          <View>
            <WorkoutForm
              onSubmit={async (data) => {
                await handleCreateWorkout(data);
                handleClose();
                navigation.navigate('Home');
              }}
            />
          </View>
        )}
      </Modal>
    </View>
  );
};

export default PlannerScreen;
