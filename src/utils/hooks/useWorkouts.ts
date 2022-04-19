import { useEffect, useState } from 'react';
import { Workout } from '../data/types';
import { getWorkouts, initWorkouts } from '../helpers/storage/workouts';

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    initWorkouts();
    async function loadData() {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }
    loadData();
  }, [workouts]);
  return workouts;
};

export default useWorkouts;
