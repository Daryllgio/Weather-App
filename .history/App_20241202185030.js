import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Navigation/Routes';
import Home from './Pages/Home/Home';

const Stack = createNativeStackNavigator();


const AppStackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Routes.Home}
          component={Home}
        />
      </Stack.Navigator>

      </NavigationContainer>

    );
};
