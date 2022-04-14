export type WorkoutFormTypes = {
  name: string;
  duration: string;
  type: string;
  reps?: string;
};

export type WorkoutFormProps = {
  onSubmit: (values: WorkoutFormTypes) => void;
};
