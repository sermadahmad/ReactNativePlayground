import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="ChatBot">
        <Stack.Screen 
        name="ChatBot" 
        component={HomeScreen} 
        // options={{ headerShown: false }}
      />
      </Stack.Navigator>
  );
};

export default AppNavigator;