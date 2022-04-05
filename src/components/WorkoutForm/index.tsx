import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { WorkoutFormTypes, WorkoutFormProps } from './types';

const WorkoutForm = ({ onSubmit }: WorkoutFormProps) => {
  const [form, setForm] = useState<WorkoutFormTypes>({
    name: '',
    duration: '',
  });

  const handleChange = (name: string) => (value: string) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <View style={styles.container}>
      <Text>Add New Exercise</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          onChangeText={handleChange('name')}
          style={styles.input}
          value={form.name}
          onFocus={() => {}}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Duration</Text>
        <TextInput
          onChangeText={handleChange('duration')}
          style={styles.input}
          value={form.duration}
        />
      </View>
      <TouchableOpacity onPress={() => onSubmit(form)} style={styles.button}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutForm;
