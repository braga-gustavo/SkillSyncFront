import { Stack } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import theme from './styles/global';

export default function App() {

  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <PaperProvider theme={theme}>
      <Stack />
    </PaperProvider>
  );
}
