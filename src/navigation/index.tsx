import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import PlannerScreen from '../screens/Planner';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name='Root' component={AppBottomTabNavigator} />
  </Stack.Navigator>
);

const BottomTab = createBottomTabNavigator();

const AppBottomTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{ headerShown: false }}
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
        tabBarIcon: ({ color, size }) => (
          <Entypo name='add-to-list' size={size} color={color} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
