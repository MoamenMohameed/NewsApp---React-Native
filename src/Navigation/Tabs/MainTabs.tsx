import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import FavScreen from "../../screens/FavScreen/FavScreen"; 
import { Ionicons } from '@react-native-vector-icons/ionicons';

const myTabs = createBottomTabNavigator();

export default function MainTabs() {
  return (
<myTabs.Navigator screenOptions={{
    headerShown:false,
     tabBarStyle: {
          // backgroundColor: '#ffff', 
          height: 60,                 
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,},
    }}
    >

    <myTabs.Screen name="HomeScreen" component={HomeScreen} options={{
      tabBarLabel:"Home",
      tabBarLabelStyle: {
        fontSize:15,
      },
      tabBarIcon:({color,size,focused})=>(<Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />)
    }} 
    />

    <myTabs.Screen name="FavScreen" component={FavScreen} options={{
      tabBarLabel:"Fav",
      tabBarLabelStyle: {
        fontSize:15,
      },
      tabBarActiveTintColor:"red",
      tabBarIcon:({color,size,focused})=>(<Ionicons name={focused ? "heart" : "heart-outline"} color={focused ? "red" : color} size={size} />)
    }}/>

</myTabs.Navigator>
  )
}