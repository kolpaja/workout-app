import { ExerciseType } from '../../utils/data/types';

export type SelectProps = {
  onChange: (value: string) => void;
  value: ExerciseType;
  options: string[];
  placeholder?: string;
  onBlur?: () => void;
  name?: string;
};
