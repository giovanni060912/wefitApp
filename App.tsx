import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes/routes';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/color';

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return null
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='#312e38' />
      <Routes />
    </ThemeProvider>
  )
}

export default App;
