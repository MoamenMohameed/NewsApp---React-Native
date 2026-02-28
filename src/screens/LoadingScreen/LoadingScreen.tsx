import LottieView from 'lottie-react-native';
import loading from '../../../assets/loading.json';
import { View,Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useEffect } from 'react';


export default function LoadingScreen() {
  const navigation = useNavigation<NavigationProp<any>>()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MainTabs")
    }, 2000);
  }, [])

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <LottieView 
        source={loading} 
        autoPlay 
        loop
        style={{ width:500, height:500 }}
      />
      {/* <Text>Loading...</Text> */}
    </View>
  )
}