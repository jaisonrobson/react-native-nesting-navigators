
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from "./app/navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}