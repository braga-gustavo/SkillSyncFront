import { Stack } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/global';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Stack />
    </PaperProvider>
  );
}
