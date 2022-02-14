import { useEffect, useState } from 'react';
import { Workout } from '../data/types';
import { getWorkoutBySlug } from '../helpers/storage/workouts';

const useSingleWorkout = ({ slug }: { slug: string }) => {
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    async function loadData() {
      const _workout = await getWorkoutBySlug(slug);
      setWorkout(_workout);
    }
    loadData();
  }, []);
  return workout;
};

export default useSingleWorkout;
