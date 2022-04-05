export type WorkoutFormTypes = {
  name: string;
  duration: string;
};

export type WorkoutFormProps = {
  onSubmit: (values: WorkoutFormTypes) => void;
};
