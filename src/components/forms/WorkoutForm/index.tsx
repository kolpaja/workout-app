import React, { useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { WorkoutFormData, WorkoutFormProps } from './types';
import styles from './styles';

const WorkoutForm = ({ onSubmit }: WorkoutFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: '',
    },
  });

  console.log('errors', errors);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
      });
    }
  }, [isSubmitSuccessful]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New workout</Text>
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
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder='Workout Name'
              />
              {errors.name && errors.name.type === 'required' && (
                <Text style={{ color: 'red' }}>*Please add exercises</Text>
              )}
            </View>
          )}
        />
      </View>
      <Pressable
        onPressIn={handleSubmit((data) => onSubmit(data as WorkoutFormData))}
      >
        <Text>Confirm</Text>
      </Pressable>
    </View>
  );
};

export default WorkoutForm;
