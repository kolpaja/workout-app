export type ExerciseType = 'stretch' | 'cardio' | 'break';

export interface WorkoutSequence {
  slug: string;
  name: string;
  type: ExerciseType;
  reps?: number;
  duration: number;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Workout {
  slug: string;
  name: string;
  difficulty: Difficulty;
  duration: number;
  sequence: WorkoutSequence[];
}
