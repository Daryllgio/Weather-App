import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home/Home';

const Stack = createNativeStackNavigator();

// Messages Stack Navigator
const MessagesStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Routes.MessagesPage}
          component={MessagesPage}
        />
        <Stack.Screen
          name={Routes.ConversationPage}
          component={ConversationPage}
        />
      </Stack.Navigator>
    );
  };
