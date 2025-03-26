import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { useRouter } from "expo-router";
import { useUserState } from "@/utils/authStore";

export default function RootLayout() {

  
  const { chekAuthStatus } = useUserState();
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  

  useEffect(()=>{
    const authStatus = async () => {
      const isAuth =  await chekAuthStatus();
      if(isAuth){
        router.replace('/(tabs)');
      }else{
        router.replace('/(auth)/login');
      }
    }
    authStatus();
  },[]);

  return (
    <GestureHandlerRootView>
      <StatusBar backgroundColor={"#0891b2"} />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>

    </GestureHandlerRootView>
  );
}




