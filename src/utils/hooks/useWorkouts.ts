import { useEffect, useState } from 'react';
import { Workout } from '../data/types';
import { getWorkouts } from '../helpers/storage/workouts';

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    async function loadData() {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }
    loadData();
  }, []);
  return workouts;
};

export default useWorkouts;
