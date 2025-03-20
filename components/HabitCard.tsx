import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

type HabitCardProps = {
    title:string;
    description: string;
    onPress?: () =>void;
}

const HabitCard = ({title, description, onPress}:HabitCardProps) => {
  return (
    <View style={{  marginVertical:5,}}>
        <View style={style.habitCard}>
          <View>
            <Text>{title}</Text>
            <Text>{description}</Text>

          </View>
          <View>
            <TouchableOpacity onPress={onPress}>
              <AntDesign name="checkcircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

const style = StyleSheet.create({
    habitCard:{
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        borderRadius:5,
        
      },
});

export default HabitCard