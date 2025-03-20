import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { FlashList } from "@shopify/flash-list";
import * as SplashScreen from 'expo-splash-screen';

import HabitCard from "@/components/HabitCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useRef, useState } from "react";

import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import { KaushanScript_400Regular, useFonts } from '@expo-google-fonts/kaushan-script'

SplashScreen.preventAutoHideAsync();


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

  const habitData = [
    {
      id: 1,
      title: "Morning Walk",
      description: "Walk for 30 minutes to stay fit",
      onPress: () => console.log("Morning Walk pressed!"),
    },
    {
      id: 2,
      title: "Read Book",
      description: "Read 20 pages daily",
      onPress: () => console.log("Read Book pressed!"),
    },
    {
      id: 3,
      title: "Drink Water",
      description: "Drink 8 glasses of water",
      onPress: () => console.log("Drink Water pressed!"),
    },
    {
      id: 4,
      title: "Meditate",
      description: "10 minutes of daily meditation",
      onPress: () => console.log("Meditate pressed!"),
    },
    {
      id: 5,
      title: "Learn Coding",
      description: "Practice 1 hour of coding",
      onPress: () => console.log("Learn Coding pressed!"),
    },
    {
      id: 6,
      title: "Exercise",
      description: "Do 30 minutes of exercise",
      onPress: () => console.log("Exercise pressed!"),
    },
    {
      id: 7,
      title: "Journal",
      description: "Write down your thoughts daily",
      onPress: () => console.log("Journal pressed!"),
    },
    {
      id: 8,
      title: "Plan Your Day",
      description: "Spend 10 minutes planning your day",
      onPress: () => console.log("Plan Your Day pressed!"),
    },
    {
      id: 9,
      title: "Eat Healthy",
      description: "Include fruits and vegetables in your diet",
      onPress: () => console.log("Eat Healthy pressed!"),
    },
    {
      id: 10,
      title: "Practice Gratitude",
      description: "Write 3 things you're grateful for",
      onPress: () => console.log("Practice Gratitude pressed!"),
    },
    {
      id: 11,
      title: "Stretch",
      description: "Stretch for 5 minutes to improve flexibility",
      onPress: () => console.log("Stretch pressed!"),
    },
    {
      id: 12,
      title: "Limit Screen Time",
      description: "Reduce screen time by 30 minutes",
      onPress: () => console.log("Limit Screen Time pressed!"),
    },
    {
      id: 13,
      title: "Clean Your Space",
      description: "Spend 10 minutes decluttering",
      onPress: () => console.log("Clean Your Space pressed!"),
    },
    {
      id: 14,
      title: "Practice Deep Breathing",
      description: "5 minutes of deep breathing",
      onPress: () => console.log("Practice Deep Breathing pressed!"),
    },
    {
      id: 15,
      title: "Sleep Early",
      description: "Get 7-8 hours of quality sleep",
      onPress: () => console.log("Sleep Early pressed!"),
    },
    {
      id: 16,
      title: "Listen to Podcasts",
      description: "Listen to a 20-minute podcast",
      onPress: () => console.log("Listen to Podcasts pressed!"),
    },
    {
      id: 17,
      title: "Spend Time with Family",
      description: "Quality time with loved ones",
      onPress: () => console.log("Spend Time with Family pressed!"),
    },
    {
      id: 18,
      title: "Practice a Hobby",
      description: "Spend 30 minutes on your favorite hobby",
      onPress: () => console.log("Practice a Hobby pressed!"),
    },
    {
      id: 19,
      title: "Learn a New Skill",
      description: "Dedicate 1 hour to learning something new",
      onPress: () => console.log("Learn a New Skill pressed!"),
    },
    {
      id: 20,
      title: "Drink Herbal Tea",
      description: "Replace one cup of coffee with tea",
      onPress: () => console.log("Drink Herbal Tea pressed!"),
    },
    {
      id: 21,
      title: "Do Yoga",
      description: "10 minutes of basic yoga",
      onPress: () => console.log("Do Yoga pressed!"),
    },
    {
      id: 22,
      title: "Take Breaks",
      description: "Rest for 5 minutes every hour",
      onPress: () => console.log("Take Breaks pressed!"),
    },
    {
      id: 23,
      title: "Connect with Friends",
      description: "Call or text a friend",
      onPress: () => console.log("Connect with Friends pressed!"),
    },
    {
      id: 24,
      title: "Limit Sugar Intake",
      description: "Avoid sugary snacks",
      onPress: () => console.log("Limit Sugar Intake pressed!"),
    },
    {
      id: 25,
      title: "Visualize Your Goals",
      description: "Spend 5 minutes visualizing success",
      onPress: () => console.log("Visualize Your Goals pressed!"),
    },
    {
      id: 26,
      title: "Smile More",
      description: "Make a conscious effort to smile",
      onPress: () => console.log("Smile More pressed!"),
    },
    {
      id: 27,
      title: "Read News",
      description: "Stay updated with current events",
      onPress: () => console.log("Read News pressed!"),
    },
    {
      id: 28,
      title: "Track Expenses",
      description: "Monitor daily spending",
      onPress: () => console.log("Track Expenses pressed!"),
    },
    {
      id: 29,
      title: "Do Affirmations",
      description: "Repeat positive affirmations",
      onPress: () => console.log("Do Affirmations pressed!"),
    },
    {
      id: 30,
      title: "Volunteer",
      description: "Help someone in need",
      onPress: () => console.log("Volunteer pressed!"),
    },
    {
      id: 31,
      title: "Declutter Inbox",
      description: "Clear 10 unnecessary emails",
      onPress: () => console.log("Declutter Inbox pressed!"),
    },
    {
      id: 32,
      title: "Limit Caffeine",
      description: "Reduce caffeine consumption",
      onPress: () => console.log("Limit Caffeine pressed!"),
    },
    {
      id: 33,
      title: "Cook at Home",
      description: "Prepare a healthy meal",
      onPress: () => console.log("Cook at Home pressed!"),
    },
    {
      id: 34,
      title: "Practice Listening",
      description: "Be fully present in conversations",
      onPress: () => console.log("Practice Listening pressed!"),
    },
    {
      id: 35,
      title: "Daily Reflection",
      description: "Reflect on what went well today",
      onPress: () => console.log("Daily Reflection pressed!"),
    },
    {
      id: 36,
      title: "Hydrate First Thing",
      description: "Drink water right after waking up",
      onPress: () => console.log("Hydrate First Thing pressed!"),
    },
    {
      id: 37,
      title: "Learn a New Language",
      description: "Spend 20 minutes practicing",
      onPress: () => console.log("Learn a New Language pressed!"),
    },
    {
      id: 38,
      title: "Take a Walk Outside",
      description: "Get fresh air for 10 minutes",
      onPress: () => console.log("Take a Walk Outside pressed!"),
    },
    {
      id: 39,
      title: "Limit Social Media",
      description: "Cut back 15 minutes on social apps",
      onPress: () => console.log("Limit Social Media pressed!"),
    },
    {
      id: 40,
      title: "Practice Forgiveness",
      description: "Let go of past grievances",
      onPress: () => console.log("Practice Forgiveness pressed!"),
    },
    {
      id: 41,
      title: "Express Gratitude",
      description: "Say thanks to someone today",
      onPress: () => console.log("Express Gratitude pressed!"),
    },
    {
      id: 42,
      title: "Watch Educational Videos",
      description: "Watch a TED Talk or documentary",
      onPress: () => console.log("Watch Educational Videos pressed!"),
    },
    {
      id: 43,
      title: "Create a To-Do List",
      description: "List out important tasks",
      onPress: () => console.log("Create a To-Do List pressed!"),
    },
    {
      id: 44,
      title: "Improve Posture",
      description: "Maintain good posture while sitting",
      onPress: () => console.log("Improve Posture pressed!"),
    },
    {
      id: 45,
      title: "Limit Junk Food",
      description: "Reduce processed food intake",
      onPress: () => console.log("Limit Junk Food pressed!"),
    },
    {
      id: 46,
      title: "Compliment Someone",
      description: "Give a genuine compliment",
      onPress: () => console.log("Compliment Someone pressed!"),
    },
    {
      id: 47,
      title: "Organize Workspace",
      description: "Spend 10 minutes cleaning your desk",
      onPress: () => console.log("Organize Workspace pressed!"),
    },
    {
      id: 48,
      title: "Unplug Before Bed",
      description: "Avoid screens 30 mins before sleeping",
      onPress: () => console.log("Unplug Before Bed pressed!"),
    },
    {
      id: 49,
      title: "Set Daily Intentions",
      description: "Define goals for the day",
      onPress: () => console.log("Set Daily Intentions pressed!"),
    },
    {
      id: 50,
      title: "Practice Kindness",
      description: "Do something kind for others",
      onPress: () => console.log("Practice Kindness pressed!"),
    },
  ];

  const [loaded , error] = useFonts({
    "Kaushan-Regular" :KaushanScript_400Regular
  });



  const transLateY = useSharedValue(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const animatedHeaderStyle = useAnimatedStyle(()=>{
    const interpolateY = interpolate(transLateY.value,[100,200],[0,-200], 'clamp')
    return {
      transform : [{translateY : interpolateY}]
    }
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
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
          data={habitData}
          keyExtractor={(item, index) =>
            item.id ? String(item.id) : String(index)
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
            <HabitCard title={item.title} description={item.description} />
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
