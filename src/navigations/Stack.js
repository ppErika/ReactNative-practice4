import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, List, Chat} from '../screens';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: {backgroundColor: '#ffffff'}, // 적용 X
        headerStyle: {
          heigth: 200, // 적용 X
          backgroundColor: '#555555',
          borderBottomWidth: 5, // 적용 X
          borderBottomColor: '#111111', // 적용 X
        },
        headerTitleStyle: {
          fontSize: 24,
          color: '#ffffff',
        },
        headerTitleAlign: 'center', // 적용 X
        // headerTitle: (props) => {
        //   console.log(props); // 로그: {"children": "Home", "tintColor": "rgb(28, 28, 30)"}
        //   return null;
        // },
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
