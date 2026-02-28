import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ArticleDetails from '../screens/ArticleDetails/ArticleDetails'
import MainTabs from './Tabs/MainTabs'
import LoadingScreen from '../screens/LoadingScreen/LoadingScreen'

export default function MainStack() {
    const Stack = createNativeStackNavigator()
  return (

      <Stack.Navigator screenOptions={{
        headerShown:false}}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
      </Stack.Navigator>

  )
}