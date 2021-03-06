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

const startUp = ['3', '2', '1', 'Go!'].reverse();

const WorkoutPreview = ({ route }: WorkoutPreviewProps) => {
  const [sequence, setSequence] = useState<WorkoutSequence[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trackerIdx, setTrackerIdx] = useState<number>(-1);

  const { countDown, isRunning, stop, start } = useCountDown(trackerIdx);

  const slug = route.params.slug;
  const workout = useSingleWorkout({ slug });

  const addItemToSequence = (index: number) => {
    let newSequence = [];
    if (index > 0) {
      newSequence = [...sequence, workout!.sequence[index]];
    } else {
      newSequence = [workout!.sequence[index]];
    }
    setSequence(newSequence);
    setTrackerIdx(index);
    start(newSequence[index].duration + startUp.length);
  };

  const hasReachedEnd =
    sequence.length === workout?.sequence.length && countDown === 0;

  useEffect(() => {
    if (!workout) {
      return;
    }
    if (trackerIdx === workout.sequence.length - 1) {
      return;
    }
    if (countDown === 0) {
      addItemToSequence(trackerIdx + 1);
    }
  }, [countDown]);

  if (!workout) {
    return <Text>Loading...</Text>;
  } else
    return (
      <View style={styles.container}>
        <WorkoutItem item={workout}>
          <Pressable onPress={() => setIsModalVisible(true)}>
            <Text>Check Sequences</Text>
          </Pressable>
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
              <Button
                onPress={() => setIsModalVisible(false)}
                title='X Close'
              />
            </View>
          </Modal>
        </WorkoutItem>

        <View style={styles.wrapper}>
          <View style={styles.counterUI}>
            <View style={styles.counterItem}>
              {sequence.length === 0 ? (
                <FontAwesome
                  onPress={() => addItemToSequence(0)}
                  name='play-circle-o'
                  size={100}
                />
              ) : isRunning ? (
                <FontAwesome
                  onPress={() => stop()}
                  name='stop-circle-o'
                  size={100}
                />
              ) : (
                <FontAwesome
                  onPress={() => {
                    if (hasReachedEnd) {
                      addItemToSequence(0);
                    } else {
                      start(countDown);
                    }
                  }}
                  name='play-circle-o'
                  size={100}
                />
              )}
            </View>
            {sequence.length > 0 && countDown >= 0 && (
              <View style={styles.counterItem}>
                <Text style={styles.countDown}>
                  {countDown > sequence[trackerIdx].duration
                    ? startUp[countDown - sequence[trackerIdx].duration - 1]
                    : countDown}
                </Text>
              </View>
            )}
          </View>

          <View>
            <Text style={styles.infoText}>
              {sequence.length === 0
                ? 'Prepare'
                : hasReachedEnd
                ? 'Good Job!'
                : sequence[trackerIdx].name}
            </Text>
          </View>
        </View>
      </View>
    );
};

export default WorkoutPreview;
