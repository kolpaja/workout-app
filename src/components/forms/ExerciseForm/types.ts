export type ExerciseFormTypes = {
  name: string;
  duration: string;
  type: string;
  reps?: string;
};

export type ExerciseFormProps = {
  onSubmit: (values: ExerciseFormTypes) => void;
};
