import AppProviders from './AppProviders';
import { HomeScreen } from './screens/HomeScreen';
import { MapScreen } from './screens/MapScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProviders>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='MapScreen' component={MapScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </AppProviders>
  );
}
