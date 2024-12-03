import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import Home from '../Pages/Home/Home';

const Stack = createNativeStackNavigator();

// Messages Stack Navigator
const AppStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Routes.Home}
          component={Home}
        />
      </Stack.Navigator>
    );
};
