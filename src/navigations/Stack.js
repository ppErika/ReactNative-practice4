import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, List, Chat} from '../screens';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNav;
