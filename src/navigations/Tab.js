import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Mail, Profile, Settings} from '../screens';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      //   tabBarOption={{
      //     showLabel: true,
      //     labelPosition: 'below-icon',
      //     style: {
      //       backgroundColor: '#0f56b3',
      //       borderTopColor: '#ffffff',
      //       borderTopWidth: 3,
      //     },
      //     activeTintColor: '#ffffff',
      //     inactiveTintColor: '#5096f1',
      //   }}
    >
      <Tab.Screen name="Mail" component={Mail} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNav;
