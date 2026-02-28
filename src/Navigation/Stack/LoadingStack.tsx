import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoadingScreen from '../../screens/LoadingScreen/LoadingScreen'

const stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <stack.Navigator>
        <stack.Screen name="LoadingScreen" component={LoadingScreen}/>
    </stack.Navigator>
  )
}