import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SelectProps } from './types';
import styles from './styles';

const dummyData = ['Bench Press', 'Squat', 'Deadlift'];

const Select = ({
  onChange,
  options = dummyData,
  value,
  name = 'Select',
  placeholder = 'Select option',
}: SelectProps) => {
  const [isSelectOn, setIsSelectOn] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{name}:</Text>
      <TextInput
        onFocus={() => setIsSelectOn(true)}
        style={[styles.inputSelect]}
        placeholder={placeholder}
        value={value}
      />
      {isSelectOn && (
        <View style={styles.select}>
          {options.map((option, index) => (
            <Pressable
              style={styles.option}
              key={index}
              onPressIn={() => {
                onChange(option);
                setIsSelectOn(false);
              }}
            >
              <Text>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default Select;
