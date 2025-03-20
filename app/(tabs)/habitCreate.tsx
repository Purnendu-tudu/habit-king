import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState, useCallback, useRef, useMemo } from "react";
import { ScrollView } from "react-native";

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

// custom component import
import HabitForm from "@/components/HabitForm";

const primaryColor = "#0891b2";

const HabitCreate = () => {
  const bottomSheetModalRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = useMemo(() => ['70%'], []);


  const handelSnapPress = useCallback((index : number) => {
    bottomSheetModalRef.current?.snapToIndex(index);
  },[]);

  return (
    <View style={style.maincontainer}>
      
      <View style={style.titleBarSection}>
        <TextInput placeholder="Search" style={style.searchBar}></TextInput>
        <TouchableOpacity style={style.button} onPress={() =>handelSnapPress(0)}>
          <Text style={{ color: "white" }}>Create</Text>
        </TouchableOpacity>
      </View>

      <View style={style.habitCard}>
        <View style={style.habitCardContent}>
          <View>
            <Text>Card Title</Text>
            <Text>Card Desciption</Text>
          </View>
          <View>
            <TouchableOpacity style={style.habitCardButton}>
              <Text>Make Habit</Text>
            </TouchableOpacity> 
          </View>
        </View>
        <View style={style.habitCardInfo}>
          <Text>People Liked</Text>
          <Text>100</Text>
        </View>
      </View>


      <BottomSheet ref={bottomSheetModalRef} index={-1} enableDynamicSizing={false} snapPoints={snapPoints} enablePanDownToClose={true}      >
        <BottomSheetView>
          <View style={style.habitForm}>
            <HabitForm />
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
  habitCard:{
    borderWidth:2,
    borderColor:'white',
  },
  habitCardContent:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5,
    backgroundColor:'white',
   
    
  },
  habitCardButton:{
    backgroundColor: primaryColor,
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  habitCardInfo:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5,
  }

});

export default HabitCreate;
