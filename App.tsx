import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { RootNavigator } from './src/product/navigates/routes';
import { StatusBar, View, StyleSheet } from 'react-native';
import { appStyle } from './src/product/styles/app_style';

export default function App() {
  return (
    <View style={appStyle.appLayout}>
      <NavigationContainer >
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}

