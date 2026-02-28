import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/Navigation/MainStack';
export default function App() {
  return (
    
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    
  );
}


