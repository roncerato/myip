import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, useColorScheme } from 'react-native';
import { NavigationContainer, Theme } from '@react-navigation/native';
import RootNavigation from './src/navigation';
import SplashScreen from 'react-native-splash-screen';
import "./services/i18next.ts";
import { customDarkTheme, customDefaultTheme } from './src/constants/themes.ts';
import { ThemeProvider, useThemeContext } from './src/contexts/ThemeContext.tsx';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Permission',
        message:
          'This app needs access to your location to show Wi-Fi information.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
      // Здесь можно безопасно получить информацию о Wi-Fi
    } else {
      console.log('Location permission denied');
      // Обработка случая, когда пользователь отказал в разрешении
    }
  } catch (err) {
    console.warn(err);
  }
}

requestLocationPermission();

function AppContent(): React.JSX.Element {
  const { isDarkTheme, setIsDarkTheme, isAutoTheme, setIsAutoTheme, systemTheme } = useThemeContext()
  const theme: Theme = isDarkTheme ? customDarkTheme : customDefaultTheme

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer theme={theme}>
      <RootNavigation />
    </NavigationContainer>
  );
}

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App;
