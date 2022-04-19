import Navigation from './src/navigation';
import useChashedResources from './src/utils/hooks/useChashedResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

export default function App() {
  const isLoading = useChashedResources();
  const colorScheme = useColorScheme();

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    );
  } else {
    return null;
  }
}
