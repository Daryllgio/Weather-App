import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Navigation/Routes';
import Home from './Pages/Home/Home';

const Stack = createStackNavigator();


const App = () => {
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

export default App;
