import { getData, checkData, storeData, removeData } from './index';
import data from '../../data/data.json';
import { Workout } from '../../data/types';

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await checkData('workout-data');
  if (!hasWorkouts) {
    console.log('Storing Workouts');
    await storeData('workout-data', data);
    return true;
  } else return false;
};

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData('workout-data');
  // console.log(workouts);
  return workouts;
};

export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
  const workouts = await getData('workout-data');
  const workout = workouts.find((workout: Workout) => workout.slug === slug);
  return workout;
};

export const clearWorkouts = async (): Promise<void> => {
  await removeData('workout-data');
};
