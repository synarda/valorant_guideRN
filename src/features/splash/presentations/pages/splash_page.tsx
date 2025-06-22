import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { splashStyles as styles } from '../styles/splash_page_styles';
import { appStyle } from '../../../../product/styles/app_style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTypography } from '../../../../product/typography/typography';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={appStyle.appLayout}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={AppTypography.titleSmall}>Valorant Guide</Text>
        <ActivityIndicator size="large" color="#FF4655" style={{ marginTop: 20 }} />
      </View>
    </SafeAreaView>
  );
}
