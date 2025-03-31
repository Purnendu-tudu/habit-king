import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { FlashList } from "@shopify/flash-list";
import * as SplashScreen from 'expo-splash-screen';

import HabitCard from "@/components/HabitCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useRef, useState } from "react";

import { supabase } from "@/utils/supabase";

import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import { KaushanScript_400Regular, useFonts } from '@expo-google-fonts/kaushan-script'
import { router, useRouter } from "expo-router";
import { useUserState } from "@/utils/authStore";
import { useUserHabits } from "@/utils/habitStore";

// SplashScreen.preventAutoHideAsync();


export default function Index() {
  const DATA = [
    {
      id:1,
      value: 100,
      color: "#a3f09d",
      text: "100",
      label:"created"
    },
    { 
      id:2,
      value: 50,
      color: "#f34d92",
      text: "50",
      label:"ongoing"
    },
    {
      id:3,
      value: 50,
      color: "#d3b4c2",
      text: "50",
      label:"completed"
    },
  ];

  const { userHabits } = useUserHabits();

  

  const [loaded , error] = useFonts({
    "Kaushan-Regular" :KaushanScript_400Regular
  });



  const transLateY = useSharedValue(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const {user ,userLogout} = useUserState();
  const router = useRouter();

  const animatedHeaderStyle = useAnimatedStyle(()=>{
    const interpolateY = interpolate(transLateY.value,[100,200],[0,-200], 'clamp')
    return {
      transform : [{translateY : interpolateY}]
    }
  })

  console.log(userHabits +"gg");

  const handelLogout = async () => {
    const logout = await userLogout();
    if(logout){
      console.log("called");
      router.replace('/login');
    }
  }

  

  useEffect(() => {
    if (loaded || error) {
      // SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={style.container}>
      <Animated.View
        style={[style.header, animatedHeaderStyle]}
        onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
      >
        <View style={style.titleBar}>
          <Text style={style.title}>
            Habit King <AntDesign name="man" size={24} color="black" />
          </Text>
          <TouchableOpacity onPress={handelLogout}><Text>Sign Out</Text></TouchableOpacity>
        </View>
        <View style={style.chartStyle}>
          <PieChart donut radius={100} innerRadius={55} data={DATA} showText textColor="black" textSize={10} semiCircle isAnimated animationDuration={300}/>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {DATA.map((data, index) => (
              <View key={data.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <View
                  style={{ backgroundColor: data.color, width: 10, height: 10 }}
                ></View>
                <Text key={index}>{data.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </Animated.View>

      <View style={{ flex: 1, width: "100%" }}>
        <FlashList
          data={userHabits}
          keyExtractor={(item, index) =>
            item.habitId ? String(item.habitId) : String(index)
          }
          estimatedItemSize={50}
          contentContainerStyle={{
            paddingTop: headerHeight-20,
            paddingBottom: 100,
          }}
          onScroll={(e)=>{
            transLateY.value = e.nativeEvent.contentOffset.y;
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <HabitCard title={item.habitTitle} description={item.habitDescription} />
          )}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
  },
  header: {
    width: "100%",
    position: "absolute",
    height: 200,
    zIndex:99
  },
  chartStyle: {
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 10,
    marginVertical: 5,
  },
  habitCard: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    textAlign: "left",
    fontFamily:"Kaushan-Regular"
  },
  titleBar: {
    marginVertical: 5,
  },
});
