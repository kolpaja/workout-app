import Navigation from './src/navigation';
import useChashedResources from './src/utils/hooks/useChashedResources';

export default function App() {
  const isLoading = useChashedResources();

  if (isLoading) {
    return <Navigation />;
  } else {
    return null;
  }
}
