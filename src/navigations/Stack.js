import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, List, Chat} from '../screens';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // 지금 이 코드가 안먹는데 이유를 모르겠네 정말
        cardStyle: {backgroundColor: '#ffffff'},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        // 마찬가지로 여기서 옵션을 줘도 안먹는데 이유를 정말 모르겠다
        // options={{cardStyle: {backgroundColor: '#ffffff'}}}
      />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default StackNav;
