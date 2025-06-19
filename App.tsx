import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/product/navigates/routes';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
