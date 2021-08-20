import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './Stack';
import TabNav from './Tab';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNav />
      {/* <TabNav /> */}
    </NavigationContainer>
  );
};

export default Navigation;
