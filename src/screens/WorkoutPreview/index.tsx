import React, { useEffect, useState } from 'react';
import { Text, View, Modal, Button, Pressable } from 'react-native';
import useSingleWorkout from '../../utils/hooks/useSingleWorkout';
import { WorkoutPreviewProps } from './types';
import styles from './styles';
import { formatMin } from '../../utils/helpers/general';
import { FontAwesome } from '@expo/vector-icons';
import WorkoutItem from '../../components/WorkoutItem';
import { WorkoutSequence } from '../../utils/data/types';
import useCountDown from '../../utils/hooks/useCountDown';

const WorkoutPreview = ({ route }: WorkoutPreviewProps) => {
  const [sequence, setSequence] = useState<WorkoutSequence[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trackerIdx, setTrackerIdx] = useState<number>(-1);

  const countDown = useCountDown(
    trackerIdx,
    trackerIdx >= 0 ? sequence[trackerIdx].duration : -1
  );

  const slug = route.params.slug;
  const workout = useSingleWorkout({ slug });

  const addItemToSequence = (index: number) => {
    setSequence([...sequence, workout!.sequence[index]]);
    setTrackerIdx(index);
  };
  //the ! says that there will be for sure a workout item

  if (!workout) {
    return <Text>Loading...</Text>;
  } else
    return (
      <View style={styles.container}>
        <WorkoutItem item={workout}>
          <Pressable onPress={() => setIsModalVisible(true)}>
            <Text>Check Sequences</Text>
          </Pressable>
        </WorkoutItem>

        <View>
          {sequence.length === 0 && (
            <FontAwesome
              onPress={() => addItemToSequence(0)}
              name='play-circle-o'
              size={100}
            />
          )}
        </View>

        <Modal visible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.sequences}>
              {workout.sequence.map((item, index) => (
                <View key={item.slug} style={styles.sequenceItem}>
                  <Text style={styles.sequenceText}>
                    {item.name} | {item.type} | {formatMin(item.duration)}
                  </Text>
                  {index !== workout.sequence.length - 1 && (
                    <View style={styles.icon}>
                      <FontAwesome name='arrow-down' size={20} />
                    </View>
                  )}
                </View>
              ))}
            </View>
            <Button onPress={() => setIsModalVisible(false)} title='X Close' />
          </View>
        </Modal>
      </View>
    );
};

export default WorkoutPreview;
