import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, List, Chat} from '../screens';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home" // 적용 O
      screenOptions={{
        cardStyle: {backgroundColor: '#ffffff'}, // 적용 X
        headerStyle: {
          heigth: 200, // 적용 X
          backgroundColor: '#555555', // 적용 O
          borderBottomWidth: 5, // 적용 X
          borderBottomColor: '#111111', // 적용 X
        },
        headerTitleStyle: {
          fontSize: 24, // 적용 O
          color: '#ffffff', // 적용 O
        },
        headerTitleAlign: 'center', // 적용 X
        headerBackTitle: 'Prev', // 적용 X - Only supported on iOS.
        headerBackTitleVisible: true, // 적용 X - Only supported on iOS.
        headerBackTitleStyle: {fontSize: 26}, // 적용 X - Only supported on iOS.
        headerTintColor: '#ff6600', // 적용 O
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerTitle: 'Chat Screen'}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
