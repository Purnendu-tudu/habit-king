import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState, useCallback, useRef, useMemo, useEffect } from "react";
import { ScrollView } from "react-native";

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

// custom component import
import HabitForm from "@/components/HabitForm";
import HabitCreateCard from "@/components/HabitCreateCard";
import { getAllDataFromTable } from "@/utils/handelData";
import { FlashList } from "@shopify/flash-list";
import { useUserHabits } from "@/utils/habitStore";

const primaryColor = "#0891b2";

const HabitCreate = () => {

  const {publicHabits, userGetPublicHabits} = useUserHabits();

  const bottomSheetModalRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = useMemo(() => ['10%','90%'], []);


  const handelSnapPress = useCallback((index : number) => {
    bottomSheetModalRef.current?.snapToIndex(1);
  },[]);

  const closeBottomSheet = () => bottomSheetModalRef.current.close();

  useEffect(()=>{
    userGetPublicHabits("abcs");
  },[]);
  

  

  return (
    <View style={style.maincontainer}>
      <View>
        <Text style={style.title}>Public Habit List</Text>
      </View>
      <View style={style.titleBarSection}>
        <TextInput placeholder="Search" style={style.searchBar}></TextInput>
        <TouchableOpacity style={style.button} onPress={() =>handelSnapPress(0)}>
          <Text style={{ color: "white" }}>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        <FlashList estimatedItemSize={30} data={publicHabits} contentContainerStyle={{ paddingBottom:90 }}  keyExtractor={(item) => item.habitId || Math.random().toString() } renderItem={({item}) => <HabitCreateCard id={item.habitId} count={item.userCount} title={item.habitTitle} description={item.habitDescription} onPress={()=>{}}/>} ></FlashList>
        
      </View>
     
      <BottomSheet ref={bottomSheetModalRef} index={-1} enableDynamicSizing={false} snapPoints={snapPoints} enablePanDownToClose={true}      >
        <BottomSheetView>
          <View style={style.habitForm}>
            <HabitForm closeModal={closeBottomSheet} />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const style = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: "left",
    fontFamily:"Kaushan-Regular"
  },
  titleBarSection: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-evenly",
  },
  searchBar: {
    marginHorizontal: 5,
    flex: 1,

    borderColor: primaryColor,
    borderRadius: 10,
    borderWidth: 1,
  },
  button: {
    flex: 1 / 2,
    backgroundColor: primaryColor,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  habitForm: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  

});

export default HabitCreate;
