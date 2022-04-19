export type WorkoutFormData = {
  name: string;
};

export type WorkoutFormProps = {
  onSubmit: (values: WorkoutFormData) => void;
};
