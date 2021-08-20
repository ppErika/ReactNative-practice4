import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Home, List, Chat} from '../screens';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        ...TransitionPresets.SlideFromRightAndroid,
        cardStyle: {backgroundColor: '#ffffff'},

        // 아래 헤더를 살리기 위해 다시 알아보자
        headerStyle: {
          heigth: 200,
          backgroundColor: '#555555',
          borderBottomWidth: 5,
          borderBottomColor: '#111111',
        },
        headerTitleStyle: {
          fontSize: 24,
          color: '#ffffff',
        },
        headerTitleAlign: 'center',
        headerBackTitle: 'Prev', // Only supported on iOS.
        headerBackTitleVisible: true, // Only supported on iOS.
        headerBackTitleStyle: {fontSize: 26}, // Only supported on iOS.
        headerTintColor: '#ff6600',
      })}>
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
