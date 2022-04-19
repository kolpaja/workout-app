import { getData, checkData, storeData, removeData } from './index';
import data from '../../data/data.json';
import { Workout } from '../../data/types';

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await checkData('workout-data');
  const workouts = await getWorkouts();
  if (!hasWorkouts) {
    console.log('Storing Workouts');
    await storeData('workout-data', data);
    return true;
  } else if (hasWorkouts && workouts.length === 0) {
    return false;
  } else return true;
};

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData('workout-data');
  return workouts;
};

export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
  const workouts = await getData('workout-data');
  const workout = workouts.find((workout: Workout) => workout.slug === slug);
  return workout;
};

export const addNewWorkout = async (newWorkout: Workout): Promise<boolean> => {
  const workouts = await getWorkouts();
  storeData('workout-data', [newWorkout, ...workouts]);
  return true;
};

export const clearWorkouts = async (): Promise<void> => {
  await removeData('workout-data');
};

export const deleteWorkout = async (slug: string): Promise<boolean> => {
  const workouts = await getWorkouts();
  const newWorkouts = workouts.filter(
    (workout: Workout) => workout.slug !== slug
  );
  storeData('workout-data', newWorkouts);
  return true;
};
