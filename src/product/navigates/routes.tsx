import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashPage from '../../features/splash/presentations/pages/splash_page';
import HomePage from '../../features/home/presentations/pages/home_page';

export type RootStackParamList = {
    Splash: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashPage} />
        <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
);
