import {Tabs} from "expo-router";

import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableWithoutFeedback } from "react-native";
import TabsBar from "@/components/TabsBar";




const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerShown:false
      }}
      tabBar={props => <TabsBar {...props} />}
      >
        <Tabs.Screen name="index"  options={{
            title:"Home",
            tabBarIcon : ({color, focused}) => (
                <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
            ),
            animation:'shift'
            
        }} />
        <Tabs.Screen name="habitCreate" options={{
            title:"Habits",
            tabBarIcon : ({color, focused}) => (
                <Ionicons name={focused ? "body" : "body-outline"} size={24} color={color} />
            ),
            animation:'shift'
        }} />
        <Tabs.Screen name="about" options={{
            title:"About",
            tabBarIcon : ({color, focused}) => (
                <Ionicons name={focused ? "people" : "people-outline"} size={24} color={color} />
            ),
            animation:'shift'
        }} />
    </Tabs>
  )
}

export default TabLayout