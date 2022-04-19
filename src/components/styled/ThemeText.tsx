import { Text, useColorScheme } from 'react-native';
import React from 'react';

const ThemeText = (props: Text['props']) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#fff' : '#000';
  return <Text {...props} style={[props.style, { color }]} />;
};

export default ThemeText;
