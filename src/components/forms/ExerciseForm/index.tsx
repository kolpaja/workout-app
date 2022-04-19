import React, { useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Select from '../../Select';
import { ExerciseFormProps, ExerciseFormTypes } from './types';
import styles from './styles';
import { ExerciseType } from '../../../utils/data/types';

const options = ['Stretch', 'Break', 'Cardio'];

const ExerciseForm = ({ onSubmit }: ExerciseFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: '',
      duration: '',
      reps: '',
      type: '',
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        duration: '',
        reps: '',
        type: '',
      });
    }
  }, [isSubmitSuccessful]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New exercise</Text>
      <View>
        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Controller
              control={control}
              name='name'
              rules={{
                required: true,
                minLength: 3,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Text>Name:</Text>
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder='Exercise Name'
                  />
                </View>
              )}
            />
            <View>
              {errors.name?.type === 'required' ? (
                <Text>This is required!</Text>
              ) : errors.name?.type === 'minLength' ? (
                <Text>Must be more than 3 characters</Text>
              ) : null}
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Controller
              control={control}
              name='duration'
              rules={{
                maxLength: 4,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Text>Duration:</Text>
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder='Duration in sec'
                  />
                </View>
              )}
            />
            <View>{errors.duration && <Text>This is required.</Text>}</View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Controller
              control={control}
              name='reps'
              rules={{
                maxLength: 2,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Text>Reps:</Text>
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder='Nr of Repetitions'
                  />
                </View>
              )}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Controller
              control={control}
              name='type'
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value as ExerciseType}
                  name='Type'
                  options={options}
                  placeholder='Select type'
                />
              )}
            />
          </View>
        </View>
      </View>

      <Pressable
        style={styles.button}
        onPressIn={handleSubmit((data) => onSubmit(data as ExerciseFormTypes))}
      >
        <Text style={styles.buttonText}>Add Exercise</Text>
      </Pressable>
    </View>
  );
};

export default ExerciseForm;
