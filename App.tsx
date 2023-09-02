import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading/Index';
import theme from './src/theme';
import { StatusBar } from 'react-native';

import { Routes } from '@routes/index';
import { AuthContextProvider } from '@contexts/AuthContext';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent 
      />
      <NativeBaseProvider>
        <AuthContextProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </AuthContextProvider>
      </NativeBaseProvider>
    </ThemeProvider>
  );
}
