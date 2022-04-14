import React, { useState } from 'react';
import { FlatList, View, Text, Pressable } from 'react-native';
import ExerciseForm from '../../components/ExerciseForm';
import { WorkoutFormTypes } from '../../components/ExerciseForm/types';
import { ExerciseType, WorkoutSequence } from '../../utils/data/types';
import slugify from 'slugify';
import styles from './styles';
import ExerciseItem from '../../components/ExerciseItem';

const PlannerScreen = () => {
  const [seqItems, setSeqItems] = useState<WorkoutSequence[]>([]);

  const handleSubmit = (data: WorkoutFormTypes) => {
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
    console.log(data);
  };

  const handleRemove = (slug: string) => {
    const newSeqItems = seqItems.filter((item) => item.slug !== slug);
    setSeqItems(newSeqItems);
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
      <ExerciseForm onSubmit={handleSubmit} />
    </View>
  );
};

export default PlannerScreen;
