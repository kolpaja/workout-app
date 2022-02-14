import { FlatList, Pressable, Text, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Workout } from '../../utils/data/types';
import WorkoutItem from '../../components/WorkoutItem';
import useWorkouts from '../../utils/hooks/useWorkouts';
import styles from './styles';

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const workouts = useWorkouts();

  const PressableItem = ({ item }: { item: Workout }) => (
    <Pressable
      onPress={() => navigation.navigate('WorkoutPreview', { slug: item.slug })}
    >
      <WorkoutItem item={item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Workouts</Text>

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.slug}
        renderItem={PressableItem}
      />
    </View>
  );
};

export default HomeScreen;
