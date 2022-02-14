import { Text, View } from 'react-native';
import { formatMin } from '../../utils/helpers/general';
import Props from './types';
import styles from './styles';

const WorkoutItem = ({ item, children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Workout: {item.name}</Text>
      <Text style={styles.duration}>Duration: {formatMin(item.duration)}</Text>
      <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
      {children && <View style={styles.childrenContainer}>{children}</View>}
    </View>
  );
};

export default WorkoutItem;
