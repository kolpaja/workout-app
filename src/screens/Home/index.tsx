import { FlatList, Pressable, Text, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Workout } from '../../utils/data/types';
import WorkoutItem from '../../components/WorkoutItem';
import useWorkouts from '../../utils/hooks/useWorkouts';
import ThemeText from '../../components/styled/ThemeText';
import { deleteWorkout } from '../../utils/helpers/storage/workouts';
import styles from './styles';

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const workouts = useWorkouts();
  const handleDelete = (id: string) => deleteWorkout(id);

  const PressableItem = ({ item }: { item: Workout }) => (
    <Pressable
      onPress={() => navigation.navigate('WorkoutPreview', { slug: item.slug })}
    >
      <WorkoutItem item={item} deleteWorkout={handleDelete} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <ThemeText style={styles.title}>Workouts</ThemeText>

      {workouts.length > 0 ? (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.slug}
          renderItem={PressableItem}
        />
      ) : (
        <View style={styles.noWorkoutsContainer}>
          <Text style={styles.noWorkouts}>
            No workouts yet. Please go to planner and add new workouts!
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
