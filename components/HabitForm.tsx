import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUserHabits } from '@/utils/habitStore';
import { useUserState } from '@/utils/authStore';

const primaryColor = "#0891b2";
const greyColor = "#737373";

type HabitFromProp = {
    closeModal : () => void;
}

const HabitForm = ({closeModal}) => {

    const [habitName, setHabitName] = useState("");
    const [habitDescitpion, setHabitDescription] = useState("");

    const { userCreateHabit } = useUserHabits();
    const {user} = useUserState();
    console.log(user);
   


    return (
        <ScrollView>
            <View style={styles.inputContianer}>
                <Text style={styles.inputLabel} >Name</Text>
                <TextInput placeholder='Enter Name' style={styles.inputStyle} onChangeText={setHabitName} value={habitName} ></TextInput>
            </View>

            

            <View style={styles.inputContianer}>
                <Text style={styles.inputLabel} >Description</Text>
                <TextInput placeholder='Enter Description' style={styles.desinputStyle} multiline={true} numberOfLines={8} onChangeText={setHabitDescription} value={habitDescitpion} ></TextInput>
            </View>

            {/* <View style={styles.inputContianer}>
            <Text style={styles.inputLabel} >Image</Text>
            <TextInput placeholder='Upload An Image' style={styles.inputStyle} ></TextInput>
        </View> */}
            

            <TouchableOpacity style={styles.button} onPress={() =>{
                closeModal();
                userCreateHabit(habitName, habitDescitpion, user.id);
                }}>
                <Text style={{ color: "white" }}>Add</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputContianer: {
        marginHorizontal: 5,
        marginVertical: 5,
    },
    inputLabel: {
        fontSize: 15
    },
    inputStyle: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: 'white'
    },
    desinputStyle: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: 'white',
        height: 150,
        textAlignVertical: "top"

    },
    button: {
        flex: 1 / 2,
        backgroundColor: primaryColor,
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    checkBoxSection:{
        marginHorizontal:5,
        marginVertical:5,
        borderColor:primaryColor,
        borderWidth:1,
        borderRadius:5,
    },
    checkBox:{
        display:'flex',
        flexDirection:'row',
        gap:5,
    }
});

export default HabitForm