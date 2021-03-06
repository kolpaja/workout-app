import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ColorSchemeName } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import PlannerScreen from '../screens/Planner';
import WorkoutPreview from '../screens/WorkoutPreview';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen
      name='Root'
      component={AppBottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='WorkoutPreview' component={WorkoutPreview} />
  </Stack.Navigator>
);

const BottomTab = createBottomTabNavigator();

const AppBottomTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{ headerShown: true }}
    initialRouteName='Home'
  >
    <BottomTab.Screen
      name='Home'
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name='home' size={size} color={color} />
        ),
      }}
    />
    <BottomTab.Screen
      name='Planner'
      component={PlannerScreen}
      options={{
        unmountOnBlur: true,
        tabBarIcon: ({ color, size }) => (
          <Entypo name='add-to-list' size={size} color={color} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'light' ? DefaultTheme : DarkTheme}
    >
      <AppNavigator />
    </NavigationContainer>
  );
}
