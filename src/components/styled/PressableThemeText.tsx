import { useColorScheme } from 'react-native';
import React from 'react';
import { PressableText, PressableTextProps } from './PressableText';

const PressableThemeText = (props: PressableTextProps) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#fff' : '#000';
  return <PressableText {...props} style={[props.style, { color }]} />;
};

export default PressableThemeText;
